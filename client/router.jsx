/**
 * Created by 성열우 on 15. 10. 20..
 */

Meteor.startup(function () {
const { Router, Route } = ReactRouter;

  const browserHistory = ReactRouter.history
    .useQueries(ReactRouter.history.createHistory)();

  React.render((
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='/signup' component={Appjs.SignUp} />
    </Router>
  ), document.getElementById('app-container'));
});
