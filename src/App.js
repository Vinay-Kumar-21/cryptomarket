import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Coin from './pages/Coin/Coin';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <div className='min-h-screen app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/coin/:coinId' element={<Coin />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
