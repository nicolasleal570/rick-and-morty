import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import UserContextProvider from './context/UserContext';
import Routes from './Routes';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Navbar />

        <div className="container">
          <Routes />
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
