/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app.scss';

import Header from './components/header';
import Cover from './components/cover';
import ListPets from './components/list-pets';
import Pets from './components/pet-card/PETS';
import Footer from './components/footer';

const App = () => (
  <React.Fragment>
    <Header />
    <Cover />
    <ListPets pets={Pets} />
    <Footer />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
