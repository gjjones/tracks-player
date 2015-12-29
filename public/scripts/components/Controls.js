/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

const Controls = (props) => (
  <div>
    <button onClick={props.onPrev}>Prev</button>
    <button onClick={props.onTogglePause}>Play/Pause</button>
    <button onClick={props.onNext}>Next</button>
  </div>
)

export default Controls;
