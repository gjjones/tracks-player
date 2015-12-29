/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sinceLastIncrement: Date.now()
    };
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.running !== this.props.running) {
      this.respondRunning(nextProps.running);
    }
    return false;
  }

  componentDidMount() {
    if (this.props.running) {
      this.timer = setInterval(this.tick.bind(this), 250);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  respondRunning(running) {
    if (running) {
      this.timer = setInterval(this.tick.bind(this), 250);
      this.setState({sinceLastIncrement: Date.now()});
    }
    else {
      this.props.onIncrement(Date.now() - this.state.sinceLastIncrement);
      clearInterval(this.timer);
    }
  }

  tick() {
    let prevTime = this.state.sinceLastIncrement;
    this.setState({sinceLastIncrement: Date.now()});
    this.props.onIncrement(Date.now() - prevTime);
  }

  render() {
    return false
  }
}
Timer.propTypes = {
  running: React.PropTypes.bool,
  onIncrement: React.PropTypes.func
}
Timer.defaultProps = {
  running: false,
  onIncrement: function() {}
}
