/**
 * Created by 성열우 on 15. 10. 20..
 */

TodoContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    let handle = Meteor.subscribe('todosList');

    return {
      loading: ! handle.ready(),
      todos: Todos.find().fetch()
    }
  },

  render() {

    if (this.data.loading) {
      return <AppLoading />
    }

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