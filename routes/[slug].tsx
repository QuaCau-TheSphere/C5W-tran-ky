import { defineRoute } from "$fresh/server.ts";
import { CSS, render } from "$gfm";
import { extract } from "$std/front_matter/yaml.ts";
import { join } from "$std/path/join.ts";

interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  summary: string;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const text = await Deno.readTextFile(join("./posts", `${slug}.md`));
    const { attrs, body } = extract<Post>(text);
    return {
      ...attrs,
      slug,
      content: body,
    };
  } catch {
    return null;
  }
}

export default defineRoute(async (_req, ctx) => {
  const post = await getPost(ctx.params.slug);
  if (post === null) return await ctx.renderNotFound();

  return (
    <>
      <main class="p-4 flex-1">
        <h1 class="text-4xl font-bold">{post.title}</h1>
        {post.publishedAt.toString() !== "Invalid Date" && (
          <time
            dateTime={post.publishedAt.toISOString()}
            class="text-gray-500"
          >
            {post.publishedAt.toLocaleDateString("en-US", {
              dateStyle: "long",
            })}
          </time>
        )}
        <div
          class="prose"
          dangerouslySetInnerHTML={{ __html: render(post.content) }}
        />
      </main>
    </>
  );
});
