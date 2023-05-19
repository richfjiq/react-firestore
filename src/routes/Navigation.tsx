import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../components';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
