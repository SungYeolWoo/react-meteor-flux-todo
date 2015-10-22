/**
 * Created by 성열우 on 2015. 10. 22..
 */

Todos = new Mongo.Collection('todos');

Meteor.methods({
  'Todo.insert'(data) {

    Todos.insert(data);
  },

  'Todo.remove'(data) {

    console.log('data', data);
    
    Todos.remove(data);
  }

});