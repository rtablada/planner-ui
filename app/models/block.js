import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
// import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  estimatedTime: attr('number'),
  completed: attr('boolean'),
  timeElapsed: attr('number'),
  order: attr('number'),
  lesson: belongsTo('lesson'),
});
