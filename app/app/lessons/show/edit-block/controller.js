import Ember from 'ember';

export default Ember.Controller.extend({
  saveBlock(block, values) {
    block.setProperties(values);

    block.save().then(() => {
      this.transitionToRoute('app.lessons.show');
    });
  },

  deleteBlock(block) {
    if (window.confirm('Are you sure you want to delete this block?')) {
      block.destroyRecord().then(() => {
        this.transitionToRoute('app.lessons.show');
      });
    }
  },
});
