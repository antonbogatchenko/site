export default function ContactsPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "40px 20px" }}>
      <h1>Contacts</h1>
      <p>Feel free to reach out:</p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:hello@antonbogatchenko.com">
            hello@antonbogatchenko.com
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
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
