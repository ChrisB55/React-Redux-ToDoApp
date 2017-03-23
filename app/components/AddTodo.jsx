const React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value ='';
            this.props.onAddTodo(todoText);
        } else {
        this.refs.todoText.focus(); // .focus method here puts cursor back automatically to try again on invalid input
        }
    },
    render: function () {       
        return (
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="Add Items"/>
                    <button className="button expanded">Add Todo </button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;
//adds most static component for adding items. 