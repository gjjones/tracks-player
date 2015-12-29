/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  updateEllapsed,
  togglePause,
  prevTrack,
  nextTrack
} from '../actions/actions';

import Timer from './Timer';
import Controls from './Controls';
import TracksList from './TracksList';

const App = ({
  running,
  currentProgress,
  currentTrack,
  tracksList,
  onIncrement,
  onTogglePause,
  onPrev,
  onNext
}) => {
  let progressTracking;
  if (currentTrack.type === 'timed') {
    progressTracking = (
      <Timer
        running={running}
        onIncrement={onIncrement}
      />
    );
  }
  return (
    <div>
      {progressTracking}
      {Math.floor(currentProgress / 1000)}
      <br/>
      <Controls
        onTogglePause={onTogglePause}
        onPrev={onPrev}
        onNext={onNext}
      />
      <TracksList
        currentTrack={currentTrack}
        tracksList={tracksList}
      />
    </div>
  );
}

function mapStateToProps (state) {
  return {
    running: state.playing,
    currentProgress: state.currentProgress,
    currentTrack: state.tracksList[state.currentIndex],
    tracksList: state.tracksList
  };
}
function mapDispatchToProps (dispatch) {
  return {
    onIncrement: (timeIncrement) => {
      dispatch(updateEllapsed(timeIncrement))
    },
    onTogglePause: () => {
      dispatch(togglePause())
    },
    onPrev: () => {
      dispatch(prevTrack())
    },
    onNext: () => {
      dispatch(nextTrack())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
