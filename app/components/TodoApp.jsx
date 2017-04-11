const React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid')


var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
        searchTest:'',
        
      todos: [
        {
          id: uuid(),
          text: 'code component'
        }, {
          id: uuid(),
          text: 'style component'
        }, {
          id: uuid(),
          text: 'update component'
        }, {
          id: uuid(),
          text: 'unit test component'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
      ... this.state.todos , {
        id: uuid(),
        text: text
      }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
//Primary/Root component 