import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr(),
  modified : attr(),
  description: attr(),
  employeePeriodSlice: belongsTo('employee-period-slice'),
  bestuursorganen: belongsTo('bestuursorgaan', { inverse: 'bestuurseenheid' }),

});
