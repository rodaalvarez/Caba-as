import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <Routes>        
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </Router>
    
  );
}

export default App;
