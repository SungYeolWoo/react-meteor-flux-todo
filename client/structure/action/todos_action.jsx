
// 행동을 정의한 객체
Action.Todos = {

  insert(data) {
    console.log('[Action.Todos.insert]', data);
    // dispatch data
    Commiter.Todos.insert(data);
  },

  remove(id) {
    console.log('[Action.Todos.remove]', id);
    Commiter.Todos.remove(id);
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