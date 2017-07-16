import React, { Component } from 'react';
import {SketchField, Tools} from 'react-sketch';
import { fromJS } from 'immutable';
import './Sketch.css';

class Sketch extends Component {

  static get actions(){
    return {
      toggleSketch: () => ({
        type: 'toggleSketch',
      }),
    }
  }

  static get reducer(){
    return {
      toggleSketch: (state)=>
      state.update('isSketch', (isSketch) => !isSketch)
    };

  }
  static get initState(){
    return fromJS({
      isSketch: false,
    })
  }
  static get namespace() {
    return 'Sketch'
  }
  render() {
    return (
      <div>

        <button onClick={this.props.toggleSketch} className='ClickButton'>{'isSketch' ? 'Click To On' : 'Click To Off'}</button>
        and do stuff
        <SketchField
          className={this.props.subState.get('isSketch') ? ('SketchFieldIs') : ('SketchFieldNot')}
          onChange={this.onChange}
          width='100vw'
          height='100vh'
          tool={Tools.Pencil}
          lineColor='black'
          lineWidth={1}/>
      </div>
    );
  }
}

export default Sketch;
