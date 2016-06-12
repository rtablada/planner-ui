import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  login({email, password}) {
    this.get('session').authenticate('authenticator:planner', email, password)
      .catch(({errors}) => {
        errors.forEach((e) => {
          console.log(e);
        });
      });
  },
});
