
TodosAction = {
  insertTodo(data) {
    console.log('data', data);

    // dispatch data
    TodosCommiter.insertTodo(data);
  },
};

//
//Actions.loadTodos = function loadTodos(todos) {
//  return {
//    type: 'LOAD_TODOS',
//    todos: todos
//  }
//};
//
//Actions.fetchTodos = function fetchTodos() {
//  return dispatch => {
//    Meteor.subscribe('todos', {
//      onReady: function() {
//        console.log("Loading todos");
//        let todos = Todos.find().fetch();
//        dispatch(Actions.loadTodos(todos));
//      }
//    });
//  }
//};
//
//Actions.addTodo = function addTodo(todo) {
//  return {
//    type: 'ADD_TODO',
//    text: todo.text,
//    _id: todo._id
//  };
//};
//
//Actions.addIfInserted = function addIfInserted(text) {
//  return dispatch => {
//    Meteor.call('todos/insert', text, function(err, res) {
//      if (err) {
//        console.log(err.reason);
//        return;
//      } else if (res) {
//        dispatch(Actions.addTodo(res));
//      }
//    });
//  }
//};
//
//Actions.removeTodo = function removeTodo(todoId) {
//  return {
//    type: 'REMOVE_TODO',
//    _id: todoId
//  };
//};
//
//Actions.removeIfRemoved = function removeIfRemoved(todoId) {
//  return dispatch => {
//    Meteor.call('todos/remove', todoId, function(err) {
//      if (err) {
//        console.log(err.reason);
//        return;
//      } else {
//        dispatch(Actions.removeTodo(todoId));
//      }
//    });
//  }
//};