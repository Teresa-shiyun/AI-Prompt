export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Prompt Tool</h1>
      <p>Frontend is running.</p>
      <p>
        Backend URL: {process.env.NEXT_PUBLIC_API_BASE_URL}
      </p>
    </main>
  );
}
