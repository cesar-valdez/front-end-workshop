import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app';

import Header from './components/header';
import Footer from './components/footer';
import Cover from './components/cover';

const App = () => <React.Fragment><Header/><Cover /><Footer/></React.Fragment>;

ReactDOM.render(<App />, document.getElementById('root'));
