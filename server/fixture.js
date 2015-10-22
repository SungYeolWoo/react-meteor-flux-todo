/**
 * Created by 성열우 on 2015. 10. 22..
 */

if (Todos.find().count() === 0) {
  let todos = [{ text: "하하" },
    { text: "바바" },
    { text: "후후" }];

  todos.forEach(function (todo) {
    Todos.insert(todo);
  });

}

