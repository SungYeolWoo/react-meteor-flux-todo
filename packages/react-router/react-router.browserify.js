// This is required for exposify
global.React = React;

ReactRouter = require('react-router');
ReactRouter.history = require('history');

/*ReactRouter.history = {
  createLocation: require('history/lib/createLocation'),
  createMemoryHistory: require('history/lib/createMemoryHistory'),
  useQueries: require('history/lib/useQueries')
};

if (Meteor.isClient) {
  ReactRouter.history.createHistory = require('history/lib/createHistory');
  ReactRouter.history.createHashHistory = require('history/lib/createHashHistory');
}*/
