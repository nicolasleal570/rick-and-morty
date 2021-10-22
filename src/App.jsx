import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Routes from './Routes';

function App() {
  return (
      <Router>
        <Navbar />

        <div className="container">
          <Routes />
        </div>
      </Router>
  );
}

export default App;
