import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';


export default Model.extend({
  label: attr(),
  numberOfPersons: attr(),
  numberOfFtes: attr(),

  sex: belongsTo('geslacht-code'),
  employeePeriodSlice: belongsTo('employee-period-slice'),
  educationalLevel: belongsTo('educational-level'),
  workingTimeCategory: belongsTo('working-time-category'),
  legalStatus: belongsTo('employee-legal-status'),
});
