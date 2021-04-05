import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.todos !== nextProps.todos;
	}

	render() {
		const { todos, onToggle, onRemove } = this.props;
		const todoList = todos.map(
			({id, text, checked, priority}) => (
				<TodoItem
					id={id}
					text={text}
					checked={checked}
					priority={priority}
					onToggle={onToggle}
					onRemove={onRemove}
					key={id}
				/>
			)
		);
		return (
			<>
				{todoList}
			</>
		);
	}
}

export default TodoItemList;
