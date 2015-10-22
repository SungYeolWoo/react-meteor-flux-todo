/**
 * Created by 성열우 on 2015. 10. 22..
 */

TodosList = React.createClass({
  PropTypes: {
    todos: React.PropTypes.array.isRequired
  },
  componentDidMount() {
    //store.dispatch(Actions.fetchTodos());
  },
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <TodoForm />
              <ul className="list-group">
                {
                  this.props.todos.map((todo) => {
                    return (
                      <Todo key={ todo._id }
                            todo = { todo } />
                    );

                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

//function mapStateToProps(state) {
//  return {
//    todos: state
//  }
//}

//this.TodosList = connect(mapStateToProps)(TodosList);