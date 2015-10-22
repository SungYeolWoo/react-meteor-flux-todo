/**
 * Created by 성열우 on 15. 10. 20..
 */

AppBody = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    let handle = Meteor.subscribe('todosList');

    return {
      todos: Todos.find().fetch()
    }
  },

  handleClick() {
    //var todoId = this.props.todo._id;
    //store.dispatch(Actions.removeIfRemoved(todoId));
  },

  render() {

    return (
      <div>
        <div className="jumbotron">
          <h1 className="text-center">Todos</h1>

        </div>
        <TodosList todos={this.data.todos} />
      </div>
    )
  }
});