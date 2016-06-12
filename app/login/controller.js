import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  login({email, password}) {
    this.get('session').authenticate('authenticator:planner', email, password)
      .catch(() => {
        window.alert('There was an error');
      });
  },
});
