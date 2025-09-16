// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { ContactDataRenderer } from './components/ContactDataRenderer'

const App = () => {
  return(
    <main className='app'>
      <ContactDataRenderer/>
      <style>{`
        .app{
          min-height: 100vh;
          min-width: 1200px;
          padding: 20px;
          background: #f5f5f5;
          color:#333;
          font-family:"Segoe UI",sans-serif;
        }
      `}
      </style>
    </main>
  );
};
// min-width: 100vw;
export default App;
