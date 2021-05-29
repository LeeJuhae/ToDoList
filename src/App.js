import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 0;

  constructor() {
    super();
    const w_todos = JSON.parse(localStorage.getItem('w_todos'));
    this.state = {
      input: '',
      priority: 1,
      todos: [],
      filtered: false,
      checkedTodos: []
    };
    if (w_todos !== null) {
      this.id = w_todos[w_todos.length - 1].id + 1;
      this.state = { ...this.state, todos: w_todos };
      // this.setState({ ...this.state, todos: w_todos }, () => {
      //   console.log('end');
      // });
    }
  }
  // componentDidMount() {
  //   const w_todos = JSON.parse(localStorage.getItem('w_todos'));
  //   if (w_todos !== null) {
  //     this.setState({
  //       ...this.state,
  //       todos: w_todos
  //     });
  //   }
  // }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = () => {
    const { input, todos, priority } = this.state;
    if (input !== '') {
      this.setState(
        {
          input: '',
          todos: todos.concat({
            id: this.id++,
            text: input,
            checked: false,
            priority: priority
          })
        },
        () => {
          localStorage.setItem('w_todos', JSON.stringify(this.state.todos));
        }
      );
    }
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  handleToggle = id => {
    const { todos } = this.state;
    const idx = todos.findIndex(todo => todo.id === id);
    const selected = todos[idx];
    this.setState(
      {
        todos: [
          ...todos.slice(0, idx),
          {
            ...selected,
            checked: !selected.checked
          },
          ...todos.slice(idx + 1)
        ]
      },
      () => {
        localStorage.setItem('w_todos', JSON.stringify(this.state.todos));
      }
    );
  };

  handleRemove = id => {
    const { todos } = this.state;
    this.setState(
      {
        todos: todos.filter(todo => todo.id !== id)
      },
      () => {
        localStorage.setItem('w_todos', JSON.stringify(this.state.todos));
      }
    );
  };

  handleTagSelect = id => {
    this.setState({
      priority: id
    });
  };

  handleFilter = e => {
    if (e.target.innerText === 'completed') {
      this.setState({
        ...this.state,
        checkedTodos: this.state.todos.filter(todo => todo.checked === true),
        filtered: true
      });
    } else {
      this.setState({
        filtered: false
      });
    }
  };

  render() {
    const { input, todos, priority } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleTagSelect,
      handleFilter
    } = this;
    return (
      <>
        <TodoListTemplate
          form={
            <Form
              value={input}
              priority={priority}
              onClick={handleTagSelect}
              onChange={handleChange}
              onCreate={handleCreate}
              onKeyPress={handleKeyPress}
            />
          }
        >
          <div className='tag-wrapper'>
            <div>All: {todos.length}</div>
            <button
              className={`${this.state.filtered === false ? 'clicked' : ''}`}
              onClick={handleFilter}
            >
              all
            </button>
            <button className={`${this.state.filtered ? 'clicked' : ''}`} onClick={handleFilter}>
              completed
            </button>
          </div>
          <TodoItemList
            todos={this.state.filtered ? this.state.checkedTodos : todos}
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
        </TodoListTemplate>
      </>
    );
  }
}

export default App;
