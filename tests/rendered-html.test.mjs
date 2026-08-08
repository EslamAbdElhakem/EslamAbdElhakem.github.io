import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
}

test("server-renders Eslam's portfolio content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Eslam AbdElhakem \| Product &amp; Technical Delivery<\/title>/i);
  assert.match(html, /I bridge product intent and/);
  assert.match(html, /Project Coordinator &amp; Scrum Master/);
  assert.match(html, /AI Models Evaluator/);
  assert.match(html, /mailto:eslam\.hakem12@gmail\.com/);
  assert.match(html, /Eslam-AbdElhakem-Profile\.pdf/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("keeps the finished portfolio accessible and free of preview code", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /aria-label="Primary navigation"/);
  assert.match(page, /rel="noreferrer"/);
  assert.match(page, /href="tel:\+201102921294"/);
  assert.match(layout, /<html lang="en">/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
