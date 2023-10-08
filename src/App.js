import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>

        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
