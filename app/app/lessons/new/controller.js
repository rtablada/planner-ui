import Ember from 'ember';

export default Ember.Controller.extend({
  saveLesson(formValues) {
    const lesson = this.store.createRecord('lesson', formValues);

    lesson.save().then(() => {
      this.transitionToRoute('app.lessons.show', lesson);
    }).catch((err) => {
      console.log(err);
    });
  }
});
