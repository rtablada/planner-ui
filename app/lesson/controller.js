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
        amPm: now.format('A'),
      });
      yield timeout(1000);
    }
  }),

  addBlock(lesson, resetForm, blockAttrs) {
    const block = this.store.createRecord('block', blockAttrs);
    block.set('lesson', lesson);
    block.set('order', lesson.get('blocks.length'));

    block.save().then(() => {
      resetForm();
    });
  },

  reorderBlocks(blocks) {
    blocks.forEach((block, order) => {
      block.set('order', order);

      if (block.get('hasDirtyAttributes')) {
        block.save();
      }
    });
  }
});
