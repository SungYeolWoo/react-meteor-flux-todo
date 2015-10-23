/**
 * Created by 성열우 on 15. 10. 20..
 */

TodoContainer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    let query = {};
    let options = {};

    const handle = Meteor.subscribe('todosList', query, options);

    return {
      loading: ! handle.ready(),
      todos: Store.Todos.find(query, options),
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
        {this.props.children}
        <TodosList todos={this.data.todos} />
        <LoginButton />
        <SignIn />
      </div>
    )
  }
});