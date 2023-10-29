import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { createContext } from 'react';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
export const AppContext = createContext();

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });
  return (
    <div className="App">
      <QueryClientProvider client={queryClient} >
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

      </QueryClientProvider>
    </div >
  );
}

export default App;
