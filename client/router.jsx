/**
 * Created by 성열우 on 15. 10. 20..
 */

Meteor.startup(function () {
const { Router, Route, Redirect } = ReactRouter;

  let history = createBrowserHistory();

  console.log('React', React);
  ReactDOM.render((
    <Router history={history}>
      <Route path='/' component={AppBody}>
        <Route path='/todos' component={Todos} />
      </Route>
    </Router>
  ), document.getElementById('app-container')); //document.getElementById('#container'));
});