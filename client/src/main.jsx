import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

export const Context = createContext();

const Appwrapper = () => {

  const [isCart, setIscart] = useState(false);

  return (
    <Context.Provider value={{
      isCart, setIscart
    }}>

      <App />

    </Context.Provider >
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appwrapper />
  </React.StrictMode>,
);
