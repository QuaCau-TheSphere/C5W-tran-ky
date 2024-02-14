import { type Config } from "tailwindcss";
import typography from "typography" 
import daisyui from "daisyui";
export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["light", "dark", "lemonade", "autumn", "aqua", "nord" ],
    logs: false
  },
} satisfies Config