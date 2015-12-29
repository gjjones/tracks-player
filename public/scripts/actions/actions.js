export const UPDATE_ELLAPSED = 'UPDATE_ELLAPSED';
export const TOGGLE_PAUSE = 'TOGGLE_PAUSE';
export const PREV_TRACK = 'PREV_TRACK';
export const NEXT_TRACK = 'NEXT_TRACK';
export const SET_TRACKS = 'SET_TRACKS';

export function updateEllapsed(timeIncrement) {
  return {
    type: UPDATE_ELLAPSED,
    timeIncrement
  };
}

export function togglePause() {
  return {
    type: TOGGLE_PAUSE
  };
}

export function prevTrack() {
  return {
    type: PREV_TRACK
  };
}

export function nextTrack() {
  return {
    type: NEXT_TRACK
  };
}

export function setTracks(tracksList) {
  return {
    type: SET_TRACKS,
    tracksList
  };
}
