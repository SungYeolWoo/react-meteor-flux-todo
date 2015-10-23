/**
 * Created by 성열우 on 2015. 10. 22..
 */

// 실제 행동하는 객체
Commiter.Todos = {
  insert(data) {

    // load show
    Meteor.call('Todo.insert', data, this._serverError);

    // load remove
    console.log('입력값을 Store 저장', data);
  },

  remove(data) {

    Meteor.call('Todo.remove', data, this._serverError);
    console.log('입력값을 Store에서 삭제', data);
  },


  _serverError(err) {
    if (err) {
      console.error('err', err);
    }
  }
};