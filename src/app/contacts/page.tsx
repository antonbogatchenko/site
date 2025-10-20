export default function ContactsPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "40px 20px" }}>
      <h1>Contacts</h1>
      <p style={{ color: "var(--muted)" }}>Feel free to reach out:</p>
      <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
        <li>
          Email:{" "}
          <a className="neon-link" href="mailto:hello@antonbogatchenko.com">
            hello@antonbogatchenko.com
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            className="neon-link"
            href="https://github.com/antonbogatchenko"
            target="_blank"
            rel="noreferrer"
          >
            @antonbogatchenko
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            className="neon-link"
            href="https://www.linkedin.com/in/antonbogatchenko/"
            target="_blank"
            rel="noreferrer"
          >
            Profile
          </a>
        </li>
      </ul>
    </main>
  );
}
