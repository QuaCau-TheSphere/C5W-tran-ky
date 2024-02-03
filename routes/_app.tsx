import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html data-theme="lemonade" class="h-screen">
      {/* <link rel="stylesheet" href="/styles.css" /> */}
      <Component />
    </html>
  );
}
