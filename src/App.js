import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 0

  state = {
    input: '',
    priority: 1,
    todos: [],
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos, priority } = this.state;
    if (input !== '')
    {
      this.setState({
        input: '',
        todos: todos.concat({
          id: this.id++,
          text: input,
          checked: false,
          priority: priority
        })
      });
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const idx = todos.findIndex(todo => todo.id === id);
    const selected = todos[idx];
    this.setState({
      todos: [
        ...todos.slice(0, idx),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(idx + 1)
      ]
    })
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  handleTagSelect = (id) => {
    this.setState({
      priority: id
    });
  }

  render() {
    const { input, todos, priority } = this.state;
    const { handleChange, handleCreate, handleKeyPress,
      handleToggle, handleRemove, handleTagSelect } = this;
    return (
      <>
        <TodoListTemplate form={(
          <Form
            value={input}
            priority={priority}
            onClick={handleTagSelect}
            onChange={handleChange}
            onCreate={handleCreate}
            onKeyPress={handleKeyPress}
          />
        )}>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        </TodoListTemplate>
      </>
    );
  }
}

export default App;
