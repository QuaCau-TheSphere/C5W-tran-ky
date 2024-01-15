
import Form1 from "../islands/Form1.tsx";
import Form2 from "../islands/Form2.tsx";
import { Form1Provider } from "../islands/Context.tsx";

export default function App() {
  return (
    <Form1Provider>
      <Form1 />
      <Form2 />
    </Form1Provider>
  );
} 