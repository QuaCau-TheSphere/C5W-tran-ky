import { CSS, render } from "https://deno.land/x/gfm@0.6.0/mod.ts";
import Form1 from "../islands/Form1.tsx";
import Form2 from "../islands/Form2.tsx";
import { TextSpan } from "https://deno.land/x/ts_morph@20.0.0/ts_morph.js";
import Test from "../islands/test.tsx";

const body = render(
  `# Hello, world!
<ul style="list-style-type: '&#x1F514; ';">
  <li>item</li>
  <li>item</li>
  <li>item</li>
</ul>

> [!IMPORTANT] Lỗi sai thường gặp khi viết YAML
> - Dùng tab để thụt đầu dòng
> - Số dấu cách ở đầu mỗi dòng không chính xác
>  
> Để đảm bảo việc viết cú pháp đúng bạn có thể dùng [YAML Viewer](https://codebeautify.org/yaml-viewer-online)

`,
  { allowedAttributes: { ul: ["style"] } },
);

export default function a() {
  // return <><Form1 /><Form2 /></>
  return <Test></Test>
}
// export default function a() {
//   return <main class="prose" style={CSS} dangerouslySetInnerHTML={{ __html: body } }>
//   {body}
//   </main>
// } 