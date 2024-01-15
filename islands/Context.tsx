import { createContext } from 'preact'
import { useState } from "preact/hooks";

export const Form1Context = createContext('sdf');

export function Form1Provider({ children }) {
  const form1State = useState('Form 1 placeholder');
  return (
    <Form1Context.Provider value={form1State}>{children}</Form1Context.Provider>
  );
}
