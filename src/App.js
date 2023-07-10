import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
