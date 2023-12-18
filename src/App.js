import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Login } from "./pages/Login";
import MyList from "./pages/MyList";
import { Provider } from "react-redux";
import { store } from './store';
// import EditableList from './pages/EditableComponentV2';
import EditableComponent from './pages/EditableComponent';
import EditableList from './pages/EditableComponentV3';
import SimpleModal from './pages/SimpleModal';
function App() {
  return (
    <div className="App">
      {/* <Provider store={store}>
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
      </Provider> */}
      {/* <MyList /> */}
      {/* <EditableList /> */}
      <SimpleModal />
      {/* <EditableList /> */}
    </div >
  );
}

export default App;
