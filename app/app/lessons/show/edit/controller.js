import Ember from 'ember';

export default Ember.Controller.extend({
  saveLesson(lesson, formValues) {
    lesson.setProperties(formValues);

    lesson.save().then(() => {
      this.transitionToRoute('app.lessons.show', lesson);
    }).catch((err) => {
      console.log(err);
    });
  }
});
