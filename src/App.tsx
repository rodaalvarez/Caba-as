import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
      <Router>
        <Routes>        
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </Router>
    
  );
}

export default App;
