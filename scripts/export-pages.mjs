import { cp, mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = path.resolve(import.meta.dirname, "..");
const outputArg = process.argv[2] ?? "tmp/github-pages-site";
const outputDir = path.resolve(projectRoot, outputArg);

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
}

if (await exists(outputDir)) {
  throw new Error(`Refusing to overwrite existing export directory: ${outputDir}`);
}

const workerUrl = pathToFileURL(path.join(projectRoot, "dist/server/index.js"));
workerUrl.searchParams.set("export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("https://eslamabdelhakem.github.io/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Portfolio render failed with status ${response.status}`);
}

const html = (await response.text())
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*>/gi, "");

await mkdir(outputDir, { recursive: true });
await cp(path.join(projectRoot, "dist/client/_next"), path.join(outputDir, "_next"), {
  recursive: true,
});
await cp(path.join(projectRoot, "public"), outputDir, { recursive: true });
await writeFile(path.join(outputDir, "index.html"), html, "utf8");
await writeFile(path.join(outputDir, ".nojekyll"), "", "utf8");

console.log(outputDir);
