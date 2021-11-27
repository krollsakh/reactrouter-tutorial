import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { Homepage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <div className='App'>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/about'>About</Link>
      </header>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
