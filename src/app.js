import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app';

import Header from './components/header';
import Footer from './components/footer';

const App = () => <React.Fragment><Header/><Footer/></React.Fragment>;

ReactDOM.render(<App />, document.getElementById('root'));
