import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter } from 'react-router-dom';
import Basket from './components/Basket'


function Routing(){
  return(
    <BrowserRouter>
      <div>
      <header className="App-header">
        <h1>Zamów Pizze</h1>
      </header>
        <Route exact path="/" component={App} />
        <Route exact path="/addOrder" component={Basket} />
      </div>
      <a href="https://www.freepik.com/free-photos-vectors/food">Food vector created by macrovector - www.freepik.com</a>
        <br/>
        <a href="https://www.freepik.com/free-photos-vectors/background">Background photo created by freepik - www.freepik.com</a>
    </BrowserRouter>
  );
}


ReactDOM.render(
  <Routing />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
