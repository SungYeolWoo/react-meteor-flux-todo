/**
 * Created by 성열우 on 15. 10. 20..
 */


Meteor.publish('todosList', function () {
  Meteor._sleepForMs(2000);
  return Todos.find();
});