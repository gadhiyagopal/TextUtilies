import Home from './Component/Home';
import Navigation from './Component/Navigation';
import Header from './Component/Header';
import About from './Component/About';
import Contect from './Component/Contect';
import { BrowserRouter, Route , Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/contect-us' element={<Contect />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
