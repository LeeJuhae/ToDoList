import React, { Component } from 'react';
import '../styles/Priority.css';

class Priority extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked || this.props.priority !== nextProps.priority;
  }

  render() {
    const { priority, onClick } = this.props;
    return (
      <div className='tag-wrapper'>
        <div className={`tag ${priority === 1 ? ' clicked' : ''}`} onClick={() => onClick(1)}>
          ✰
        </div>
        <div className={`tag ${priority === 2 ? ' clicked' : ''}`} onClick={() => onClick(2)}>
          ✰✰
        </div>
        <div className={`tag ${priority === 3 ? ' clicked' : ''}`} onClick={() => onClick(3)}>
          ✰✰✰
        </div>
      </div>
    );
  }
}

export default Priority;
