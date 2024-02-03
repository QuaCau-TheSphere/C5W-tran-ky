import { CSS, render } from "https://deno.land/x/gfm/mod.ts";

const markdown = `# Hello, world!`

const body = render(markdown, {
  baseUrl: "https://example.com",
});

export default function a() {
  return (
    <main dangerouslySetInnerHTML={{ __html: body }}>
      {body}
    </main>
  );
}