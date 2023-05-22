import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cars, Home, Navbar } from '../components';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar>
              <Home />
            </Navbar>
          }
        />
        <Route
          path="/cars"
          element={
            <Navbar>
              <Cars />
            </Navbar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
