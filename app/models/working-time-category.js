import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  label: attr(),
  employeeObservation: hasMany('employee-observation'),
});
