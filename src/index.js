import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Blog from './Blog';
import { Router, Route, Switch, Redirect } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import Layout from './Layout';
import Work from './Work';
import About from './About';
import Sketch from './components/Sketch';
import { bootApp } from 'tahini';
import Clock from './components/Clock';

const app = bootApp();
const history = createHashHistory();
const SketchP = app.getDevice( Sketch, ['Sketch'], Sketch.initState );


ReactDOM.render(
  <Router history={history}>
    <Layout>

      <Switch>
        <Route path='/blog' component={Blog}/>
        <Route path='/home' component={SketchP}/>
        <Route path='/work' component={Work}/>
        <Route path='/about' component={About}/>
        <Redirect from="/" to="/home" />

      </Switch>
    </Layout>
  </Router>, document.getElementById('root'));
  registerServiceWorker();
