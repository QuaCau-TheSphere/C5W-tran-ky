import { useContext, useState } from "preact/hooks";
import { Form1Context } from './Context.tsx';

export default function Form2() {
  const form1Data = useContext(Form1Context)
  const [form2Data, setForm2Data] = useState('Form 2 placeholder')
    
  return (
    <>
        <textarea 
            value = {form2Data} 
            onInput={(event) => setForm2Data(event.target.value)}
        />
        <p><p>The value is {form1Data + ' ' + form2Data}</p></p>
    </>
  );
}
