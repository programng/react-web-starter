import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }

    // this.handleChange = this.handleChange.bind(this) //don't have to call bind every single time in template JSX
  }
  handleChange(e) { //with babel stage zero, to avoid having to bind this, can user arrow functions... handleChange = (e) => {}
    const {value} = e.target;
    this.setState({newTodo: value});
  }
  handleClick(e) {
    e.preventDefault(); //prevent from sending to server b/c form tag
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }
  removeTodo(i) {
    const todos = [...this.state.todos.slice(0, i), this.state.todos.slice(i + 1)];
    this.setState({todos});
  }
  render() {
    return (
      <div>
        <form>
          <input onChange={this.handleChange.bind(this)} value={this.state.newTodo} type="text" placeholder="new todo"/>
          <button onClick={this.handleClick.bind(this)}>create</button>
        </form>
        <ul>
          {this.state.todos.map((todo, i) => {
            return (
              <li onClick={() => this.removeTodo.call(this, i)}>{todo}</li>
            )
          }
          )}
        </ul>
      </div>
    );
  }
}

//put form data in local state, keeps track of state and not actual element by not using refs

// other implementation with ref

// import React, { Component } from 'react';

// export class Todo extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [],
//       newTodo: ''
//     }
//   }
//   handleClick(e) {
//     e.preventDefault(); //prevent from sending to server b/c form tag
//     const todos = [...this.state.todos, this.input.value];
//     this.setState({todos});
//     this.input.value = '';
//   }
//   render() {
//     return (
//       <div>
//         <form>
//           <input ref={node => this.input=node} type="text" placeholder="new todo"/>
//           <button onClick={this.handleClick.bind(this)}>create</button>
//         </form>
//         <ul>
//           {this.state.todos.map(todo => <li>{todo}</li>)}
//         </ul>
//       </div>
//     );
//   }
// }
