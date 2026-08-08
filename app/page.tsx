const experiences = [
  {
    period: "May 2025 - Present",
    role: "Project Coordinator & Scrum Master",
    company: "SuperCommerce",
    summary:
      "Coordinate delivery across customers, stakeholders, system integrators, and technical teams while facilitating the team's agile ceremonies.",
    tags: ["Scrum", "Delivery", "Stakeholder alignment"],
  },
  {
    period: "Dec 2024 - Feb 2025",
    role: "AI Models Evaluator",
    company: "Outlier",
    summary:
      "Evaluated and ranked AI-generated Python and JavaScript code, with detailed feedback on quality, efficiency, and engineering practices.",
    tags: ["Code review", "Python", "JavaScript", "RLHF"],
  },
  {
    period: "May 2024 - Jan 2025",
    role: "Software Engineer to Product Owner Intern",
    company: "Chingu",
    summary:
      "Built and launched responsive web applications, then expanded into product ownership while continuing to contribute as an engineer.",
    tags: ["React", "Next.js", "Product ownership"],
  },
  {
    period: "Jun 2024 - Sep 2024",
    role: "Programming Instructor",
    company: "iSchool",
    summary:
      "Delivered more than 100 online and in-person coding classes using Python and the Godot game engine for learners aged 6 to 18.",
    tags: ["Python", "Godot", "Teaching"],
  },
  {
    period: "Jul 2020 - Jun 2021",
    role: "Frontend Developer",
    company: "S3Geeks Foundation",
    summary:
      "Developed the S3Geeks Archive frontend with HTML, CSS, and JavaScript, focusing on a responsive, user-friendly experience.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const toolkit = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Git & GitHub",
  "Scrum",
  "Agile delivery",
  "Trello",
  "Project coordination",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Eslam AbdElhakem, home">
          <span>EA</span>
          <span className="brand-name">Eslam AbdElhakem</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:eslam.hakem12@gmail.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow fade-in">
            <span className="status-dot" /> Egypt · Open to building what matters
          </div>
          <p className="kicker fade-in delay-1">Software engineering meets product delivery</p>
          <h1 className="fade-in delay-1">
            I bridge product intent and <em>technical delivery.</em>
          </h1>
          <p className="hero-summary fade-in delay-2">
            I&apos;m Eslam, a project coordinator, Scrum Master, and software engineer who enjoys
            turning ideas into clear plans, practical features, and products teams can ship.
          </p>
          <div className="hero-actions fade-in delay-2">
            <a className="button primary" href="#experience">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a className="button secondary" href="/Eslam-AbdElhakem-Profile.pdf" download>
              Download profile
            </a>
          </div>
        </div>

        <aside className="signal-card fade-in delay-3" aria-label="Career snapshot">
          <div className="signal-top">
            <span>Career snapshot</span>
            <span className="signal-mark" aria-hidden="true">↗</span>
          </div>
          <div className="signal-core">
            <span className="monogram">EA</span>
            <p>Product-focused technologist</p>
          </div>
          <div className="signal-grid">
            <div>
              <strong>100+</strong>
              <span>Coding classes delivered</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Connected disciplines</span>
            </div>
            <div>
              <strong>2017</strong>
              <span>First frontend role</span>
            </div>
            <div>
              <strong>Now</strong>
              <span>Coordinating technical delivery</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label">
          <span>01</span>
          <p>About</p>
        </div>
        <div className="about-content">
          <h2>Comfortable in the space between a product idea and working software.</h2>
          <p>
            My background spans frontend development, product ownership, code evaluation, and
            agile delivery. That mix helps me understand both the details inside a feature and
            the coordination needed to move it into production.
          </p>
          <div className="capability-grid">
            <article>
              <span className="capability-number">01</span>
              <h3>Build</h3>
              <p>Responsive web experiences with modern frontend tools and a focus on usability.</p>
            </article>
            <article>
              <span className="capability-number">02</span>
              <h3>Review</h3>
              <p>AI-generated and human-written code for quality, efficiency, and sound practices.</p>
            </article>
            <article>
              <span className="capability-number">03</span>
              <h3>Coordinate</h3>
              <p>People, priorities, and timelines through clear communication and agile routines.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-heading">
          <div className="section-label light">
            <span>02</span>
            <p>Selected experience</p>
          </div>
          <h2>A career shaped by learning, building, and helping teams move forward.</h2>
        </div>
        <div className="experience-list">
          {experiences.map((item, index) => (
            <article className="experience-item" key={`${item.company}-${item.role}`}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-date">{item.period}</div>
              <div className="experience-main">
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p className="experience-summary">{item.summary}</p>
                <div className="tag-row" aria-label="Skills used">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="toolkit section-shell" id="toolkit">
        <div className="section-label">
          <span>03</span>
          <p>Toolkit</p>
        </div>
        <div className="toolkit-content">
          <h2>Technical context, product thinking, and delivery discipline.</h2>
          <div className="skill-cloud" aria-label="Technical and professional skills">
            {toolkit.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="credentials">
            <article>
              <p className="credential-type">Education</p>
              <h3>Bachelor&apos;s degree in Computer Science</h3>
              <p>Faculty of Science, Assiut University · 2016 - 2021</p>
            </article>
            <article>
              <p className="credential-type">Certifications</p>
              <h3>Data Analysis Professional</h3>
              <p>Front End Web Developer Nanodegree</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <p className="contact-overline">Curious by default. Committed to the finish.</p>
        <h2>Let&apos;s build something useful.</h2>
        <p className="contact-copy">
          I&apos;m always interested in thoughtful conversations about software, products, and
          stronger ways of working together.
        </p>
        <div className="contact-links">
          <a href="mailto:eslam.hakem12@gmail.com">
            Email me <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/eslam-abdelhakem-b38294179"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href="tel:+201102921294">
            Call me <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span>EA</span>
          <span className="brand-name">Eslam AbdElhakem</span>
        </a>
        <p>Project Coordinator · Scrum Master · Software Engineer</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
