import CountryPage from 'containers/CountryPage';
import HomePage from 'containers/HomePage';
import Notfound from 'containers/Notfound';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Main } from 'components/Main';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Main>
        <Routes>
          <Route path='/' element={<HomePage />}> </Route>
          <Route path='country' element={<CountryPage />}> </Route>
          <Route path='*' element={<Notfound />}> </Route>
        </Routes>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
