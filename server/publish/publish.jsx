/**
 * Created by 성열우 on 15. 10. 20..
 */


Meteor.publish('todosList', function () {
  return Todos.find();
});