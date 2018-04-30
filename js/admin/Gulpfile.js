var gulp = require('flarum-gulp');

gulp({
  modules: {
    'noriods/flarum-messages': [
      'src/**/*.js',
    ]
  }
});
