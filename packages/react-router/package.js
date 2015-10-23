Package.describe({
  name: 'shinejs:react-router',
  version: '0.14.0',
  summary: 'react-router (official): A complete routing solution for React.js',
  git: '',
  documentation: 'README.md'
});

Npm.depends({
  'exposify': '0.4.3',
  'react-router': '1.0.0-rc3',
  'history': '1.12.5'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');

  api.use(['react-runtime@0.14.0', 'cosmos:browserify@0.8.0']);
  api.imply(['react-runtime@0.14.0']);

  api.add_files([
    'react-router.browserify.options.json',
    'react-router.browserify.js'
  ]);

  api.export('ReactRouter');
});
