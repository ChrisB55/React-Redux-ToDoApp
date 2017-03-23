const React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'code component'
        }, {
          id: 2,
          text: 'style component'
        }, {
          id: 3,
          text: 'update component'
        }, {
          id: 4,
          text: 'unit test component'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo' + text);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
//Primary/Root component 