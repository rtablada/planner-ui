import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  lessons: attr(),
  week: attr('number'),
  day: attr('number'),
  date: attr('string'),
  image: attr('string'),
  quote: attr('string'),

  blocks: hasMany('block'),
});
