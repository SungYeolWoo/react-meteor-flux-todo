/**
 * Created by 성열우 on 15. 10. 20..
 */

Meteor.startup(function () {
const { Router, Route } = ReactRouter;

  let history = createBrowserHistory();

  ReactDOM.render((
    <Router history={history}>
      <Route path='/' component={TodoContainer} >
        <Route path='signup' component={SignUp} />
      </Route>
    </Router>
  ), document.getElementById('app-container'));
});