import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(_req: Request) {
  return Response.redirect("https://example.com", 307);
}

serve(handler);
