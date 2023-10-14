import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Backoffice from './pages/Backoffice';
import Public from './pages/Public';
import CustomProvider from './context/AppContext';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <CustomProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/backoffice/*' element={<Backoffice />} />
          <Route path='/*' element={<Public />} />
        </Routes>
      </Router>
    </CustomProvider>
  );
}

export default App;
