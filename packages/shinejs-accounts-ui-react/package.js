Package.describe({
  name: 'shinejs:accounts-ui-react',
  version: "1.1.8",
  summary: "React version of login widgets",
  git: '',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use([
    'react',
    ], 'client');

  api.addFiles([
    'components/LoginButton.jsx',
    'components/SignIn.jsx',
    'components/SignUp.jsx'], 'client');

  api.export(['LoginButton', 'SignIn', 'SignUp'], 'client');
});



Package.onTest(function (api) {
  api.use('shinejs:accounts-ui-react');
  api.use('tinytest');
});
