import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Login } from "./pages/Login";
import { Provider } from "react-redux";
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to="/" >Home</Link>
          <Link to="/login" >Login</Link>
          <Link to="/menu" >Menu</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </div >
  );
}

export default App;
