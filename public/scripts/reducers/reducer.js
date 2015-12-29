import {
  UPDATE_ELLAPSED,
  TOGGLE_PAUSE,
  PREV_TRACK,
  NEXT_TRACK,
  SET_TRACKS
} from '../actions/actions';


const prevTrackBuffer = 3000;

const initialState = {
  playing: false,
  currentIndex: 0,
  currentProgress: 0,
  tracksList: [
    {
      name: 'apple',
      type: 'timed',
      duration: 7 * 1000
    },
    {
      name: 'orange',
      type: 'requires-input',
      duration: 10 * 1000
    },
    {
      name: 'kiwi',
      type: 'timed',
      duration: 15 * 1000
    }
  ]
};

export default function (state = initialState, action) {
  let currentIndex = state.currentIndex,
    currentProgress = state.currentProgress;
  switch(action.type) {
  case UPDATE_ELLAPSED:
    currentProgress += action.timeIncrement;
    if (currentProgress > state.tracksList[currentIndex].duration) {
      if (currentIndex < state.tracksList.length - 1)
        return {
          ...state,
          currentIndex: currentIndex + 1,
          currentProgress: 0
        };
      else
        return {
          ...state,
          playing: false,
          currentProgress: state.tracksList[currentIndex].duration
        };
    }
    return {
      ...state,
      currentProgress
    };
  case TOGGLE_PAUSE:
    return {
      ...state,
      playing: !state.playing
    };
  case PREV_TRACK:
    if (currentProgress < prevTrackBuffer && currentIndex > 0)
      currentIndex -= 1;
    currentProgress = 0;
    return {
      ...state,
      currentIndex,
      currentProgress
    }
  case NEXT_TRACK:
    if (state.currentIndex < state.tracksList.length - 1) {
      return {
        ...state,
        currentIndex: currentIndex + 1,
        currentProgress: 0
      };
    }
    else {
      return {
        ...state,
        playing: false,
        currentProgress: state.tracksList[currentIndex].duration
      };
    }
  case SET_TRACKS:
    return {
      ...state,
      tracksList: action.tracksList
    }
  default:
    return state;
  }
}
