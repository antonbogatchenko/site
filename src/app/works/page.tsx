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
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "40px 20px" }}>
      <h1>Works</h1>
      <ul style={{ listStyle: "none", padding: 0, margin: "24px 0" }}>
        {works.map((w) => (
          <li key={w.title} style={{ marginBottom: 16 }}>
            <article>
              <h2 style={{ margin: "0 0 6px" }}>{w.title}</h2>
              <p style={{ margin: 0 }}>{w.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
