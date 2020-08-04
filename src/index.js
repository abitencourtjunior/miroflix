import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import PageNotFound from './pages/404'
import FormCategory from './pages/Form/Category'
import FormVideo from './pages/Form/Video'
import Home from './pages/Home/Home'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/create/video" component={FormVideo} />
      <Route path="/create/category" component={FormCategory} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
