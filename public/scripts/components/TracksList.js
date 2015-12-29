/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

const TracksList = ({currentTrack, tracksList}) => (
  <ul>
    {tracksList.map((track, location) => (
      <li key={location}>
        {track.name === currentTrack.name ? <b>{track.name}</b> : track.name}
      </li>
    ))}
  </ul>
)

export default TracksList;
