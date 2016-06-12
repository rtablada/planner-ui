import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  classNames: ['top-nav'],

  actions: {
    toggleMenu() {
      this.$().toggleClass('active');
    },

    logout() {
      this.get('session').invalidate();
    },
  },
});
