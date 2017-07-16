import React, { Component } from 'react';
import './App.css';
import  DropDown  from './DropDown'
import { fromJS } from 'immutable';
import './ClockFace.css';

class Clock extends Component {
  static get namespace(){
    return 'coinx-app';
  }

  static get actions(){
    return {
      setTime: (epochMillis)=> ({
        type: 'setTime',
        payload: epochMillis,
      })
    };
  }

  static get reducer(){
    return {
      setTime: (state, { payload }) =>
      state.set('epochMillis', payload),
    }
  }

  static get initState(){
    return fromJS({
      epocMilis: 0,
    });
  }


  componentDidMount() {
    this.interval = setInterval(() => this.props.setTime((new Date()).getTime()), 200);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    const epochMillis = this.props.subState.get('epochMillis');
    const epocSeconds =  epochMillis/1000;
    const daySeconds = Math.floor(epocSeconds % 86400)
    const dayMinutes = Math.floor(daySeconds / 60);
    const currentHours = Math.floor(daySeconds / 3600);
    const currentMinutes = dayMinutes % 60;
    const currentSeconds = daySeconds % 60;

    return (
      <div className="App">
        <div className='clockFace'>
          <DropDown/>
          <span className='clock1'>1</span>
          <span className='clock2'>2</span>
          <span className='clock3'>3</span>
          <span className='clock4'>4</span>
          <span className='clock5'>5</span>
          <span className='clock6'>6</span>
          <span className='clock7'>7</span>
          <span className='clock8'>8</span>
          <span className='clock9'>9</span>
          <span className='clock10'>10</span>
          <span className='clock11'>11</span>
          <span className='clock12'>12</span>
          <div  className='secondHand'style={{transform: 'rotate('+(6*(currentSeconds+30))+'deg)'}}>
          </div>
          <div className='minuteHand' style={{transform: 'rotate('+(6*(currentMinutes+30))+'deg)'}}>
          </div>
          <div className='hourHand' style={{transform: 'rotate('+(6*(currentHours+30))+'deg)'}}>
          </div>

        </div>
      </div>
    );
  }
}

export default Clock;
