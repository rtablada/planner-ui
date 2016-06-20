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
      this.route('show', {path: '/:lesson_id'}, function() {
        this.route('edit');
        this.route('edit-block', {path: '/block/:block_id'});
      });
    });
  });

  this.route('lesson', {
    path: '/lesson/:lesson_id'
  });
});

export default Router;
