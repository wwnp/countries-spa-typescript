import CountryPage from 'containers/CountryPage';
import HomePage from 'containers/HomePage';
import Notfound from 'containers/Notfound';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Main } from 'components/Main';
import AuthPage from './containers/AuthPage';

function App() {
  const [countries, setCountries] = useState<any>([])
  return (
    <div className='App'>
      <Header></Header>
      <Main>
        <Routes>
          <Route path='/' element={<HomePage countries={countries} setCountries={setCountries} />}> </Route>
          <Route path='country/:name' element={<CountryPage />}> </Route>
          <Route path='/auth' element={<AuthPage />}> </Route>
          <Route path='*' element={<Notfound />}> </Route>
        </Routes>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
