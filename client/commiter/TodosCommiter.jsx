/**
 * Created by 성열우 on 2015. 10. 22..
 */

TodosCommiter = {
  insertTodo(data) {

    Meteor.call('Todo.insert', data, this._serverError);
    console.log('입력값을 Store 저장', data);
  },

  _serverError(err) {
    if (err) {
      console.error('err', err);
    }
  }
};