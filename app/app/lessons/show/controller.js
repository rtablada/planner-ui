import Ember from 'ember';
import moment from 'moment';
import { task, timeout } from 'ember-concurrency';

export default Ember.Controller.extend({
  init() {
    this.get('tick').perform();
  },

  tick: task(function * () {
    while (true) {
      const now = moment();

      this.setProperties({
        hours: now.format('hh'),
        minutes: now.format('mm'),
        seconds: now.format('ss'),
      });
      yield timeout(1000);
    }
  })
});
