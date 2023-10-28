import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/" >Home</Link>
        </div>
        <div>
          <Link to="/menu" >Menu</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
