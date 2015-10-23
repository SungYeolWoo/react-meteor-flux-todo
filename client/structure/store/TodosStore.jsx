/**
 * Created by 성열우 on 2015. 10. 23..
 */

Store.Todos = {
  find(query, options) {
    return Todos.find(query, options).fetch();
  },

  findOne(query, options) {
    return Todos.findOne(query, options)
  },
}