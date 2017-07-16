import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Clock from './components/Clock';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h1 className='HeaderName'>Nachum Freedman</h1>
          <Clock/>

        <div className=' HeaderButtons '>
          <a href='#/home'>
            <button className="btn btn-warning ButtonBarLeft">Home</button>
          </a>
          <a href='#/blog'>
            <button className="btn btn-warning ButtonBar">Blog</button>
          </a>
          <a href='#/work'>
            <button className="btn btn-warning ButtonBar">Work</button>
          </a>
          <a href='#/about'>
            <button className="btn btn-warning ButtonBarRight">About</button>
          </a>
        </div>
      </div>
    )
  }
}
export default Header;
