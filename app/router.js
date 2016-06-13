import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('logout');

  this.route('app', function() {
    this.route('lessons', function() {
      this.route('new');
      this.route('show');
    });
  });
});

export default Router;
