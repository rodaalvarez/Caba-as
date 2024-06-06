import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Welcome from './features/Welcome/Welcome';

function App() {

  return (
      <Router>
        <Routes>        
          <Route path="/" element={<WelcomePage />} />
          <Welcome/>
        </Routes>
      </Router>
    
  );
}

export default App;
