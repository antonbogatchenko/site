type Work = {
  title: string;
  description: string;
  link?: string;
};

const works: Work[] = [
  { title: "Project One", description: "Short description of the project." },
  { title: "Project Two", description: "Another notable work." },
  {
    title: "Project Three",
    description: "Something impactful and interesting.",
  },
];

export default function WorksPage() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
      <h1>Works</h1>
      <div className="work-grid">
        {works.map((w) => (
          <article key={w.title} className="work-card">
            <h2 style={{ margin: "0 0 6px" }}>{w.title}</h2>
            <p style={{ margin: 0, color: "var(--muted)" }}>{w.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
