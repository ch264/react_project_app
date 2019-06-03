import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
