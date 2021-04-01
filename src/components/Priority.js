import React, { Component } from 'react';
import '../styles/Priority.css';

class Priority extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return (this.props.checked !== nextProps.checked) || (this.props.priority !== nextProps.priority);
	}

	render() {
		const { priority, onClick } = this.props;
		console.log(priority);
		return (
			<div style={{display: 'flex', justifyContent:'space-around', margin: '0 0 1rem 0'}}>
				<div className={`tag ${priority === 1 ? ' clicked' : ''}`} onClick={()=>onClick(1)}>✰</div>
				<div className={`tag ${priority === 2 ? ' clicked' : ''}`} onClick={()=>onClick(2)}>✰✰</div>
				<div className={`tag ${priority === 3 ? ' clicked' : ''}`} onClick={()=>onClick(3)}>✰✰✰</div>
			</div>
		);
	}
}

export default Priority;
