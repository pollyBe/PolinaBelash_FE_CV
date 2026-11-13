import Link from "next/link";

export default function NotFound(): React.ReactElement {
  return (
    <html lang="en">
      <body>
        <main style={{ padding: "5rem 1.25rem", textAlign: "center" }}>
          <h1>404</h1>
          <p>Page not found</p>
          <Link href="/">Home</Link>
        </main>
      </body>
    </html>
  );
}
