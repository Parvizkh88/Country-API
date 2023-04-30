import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Countries from './components/Countries';
import { CountryT } from './types/CountryTypes';
import { fetchCountries } from './redux/countries/countriesSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';
import MyNavbar from './components/MyNavbar';
import Form from 'react-bootstrap/Form';

function App() {
  const { countries } = useAppSelector((state) => state.countriesR);
  const dispatch = useAppDispatch();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <BrowserRouter>
        <MyNavbar />
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Dark mode"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
          />
        </Form>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:name" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
