import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { useState, createContext } from 'react';
export const AppContext = createContext();

function App() {

  const [username, setUsername] = useState("Heshan");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
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
      </AppContext.Provider>
    </div >
  );
}

export default App;
