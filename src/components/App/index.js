import React from "react";
import { block } from 'bem-cn';
import './style.css'

const cn = block('app');

function App({ children }) {
  return <div className={cn()}>{children}</div>;
}

export default App;
