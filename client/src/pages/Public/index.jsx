import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';

const Public = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
    </Routes>
  );
};

export default Public;
