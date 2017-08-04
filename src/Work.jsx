import React, {Component} from 'react';
import './Work.css'
import Clock from './components/Clock'
class Work extends Component {
  render() {
    return (
      <div className="App">
        <button className='WrokBox btn btn-warning'>
          <div className='ImgDiv'>
            <img src='./graffit.JPG'
              alt="Graffit App"
              className='GraffitIMG'/>
          </div>
          <div className='WorkBoxHeader'>Graffit</div>
        </button>
        <Clock/>

        <button className='WrokBox btn btn-warning'>
          <div className='ImgDiv'>
            <img src='./graffit.JPG'
              alt="Graffit App"
              className='GraffitIMG'/>
          </div>
          <div className='WorkBoxHeader'>Project name</div>
        </button>
      </div>
    );
  }
}
export default Work;
