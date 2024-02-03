import { useContext, useState } from "preact/hooks";
import { Form1Context } from './Context.tsx';

export default function Form1() {
  const [form1Data, setForm1Data] = useContext(Form1Context)
    
  return (
    <textarea 
    value = {form1Data} 
    onInput={(event) => setForm1Data(event.target.value)}
    />
  );
}
