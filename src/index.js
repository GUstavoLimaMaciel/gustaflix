import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria';
import CadastroVideo from './pages/cadastro/Video';
import Home from './pages/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={Home} exact />
      
      <Route component={ () => { return <div><h1>Error 404!</h1></div> } } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
