/**
 * Created by 성열우 on 2015. 10. 22..
 */


// 실제 데이터가 저장되는 객체 (mongo)
Todos = new Mongo.Collection('todos');

Meteor.methods({
  'Todo.insert'(data) {

    Todos.insert(data);
    console.log('[Todo.insert] ', data);
  },

  'Todo.remove'(data) {

    Todos.remove(data);
    console.log('[Todo.remove] ', data);
  }

});