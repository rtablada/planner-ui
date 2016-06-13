import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  lessons: attr(),
  week: attr('integer'),
  day: attr('integer'),
  date: attr('date'),
  image: attr('string'),
  quote: attr('string')
});
