import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';

const Backoffice = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
    </Routes>
  );
};

export default Backoffice;
