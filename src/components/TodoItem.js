import React, { Component } from 'react';
import '../styles/TodoItem.css'

class TodoItem extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.checked !== nextProps.checked;
	}

	render() {
		const { id, text, checked, priority, onToggle, onRemove } = this.props;
		return (
			<div className="todo-item" onClick={() => {onToggle(id)}}>
				<div className="remove" onClick={(e) => {
					e.stopPropagation();
					onRemove(id)
				}}>
					&times;
				</div>
				<div className="priority">{'✰'.repeat(priority)+'   '}</div>
				<div className={`todo-text ${ checked ? ' checked' : ''}`}>
					{text}
				</div>
				{checked && (<div className="check-mark">✓</div>)}
			</div>
		);
	}
}

export default TodoItem;
