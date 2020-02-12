import React from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import {
  Main,
  SpendingSummary,
  Products
} from './views/index.js';
// import './css/styles.css';

export default function () {
  return (
    <HashRouter>
      <Route exact path="/" component={Main} />
      <Route path="/spendings" component={SpendingSummary} />
      <Route path="/products" component={Products} />
    </HashRouter>
  );
}