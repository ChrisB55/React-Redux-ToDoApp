const React = require('react');
var TodoList = require('TodoList');

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
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
//Primary/Root component 