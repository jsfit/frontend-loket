import Route from '@ember/routing/route';
import {hash} from 'rsvp';

export default Route.extend({

  model() {
    let queryParams = {
      page:{
        size: 40,
        number: 0
      },
      include: [
        'sex',
        'educational-level',
        'legal-status',
        'working-time-category',
      ].join(',')
    };
    return hash({
      employeePeriodSlice: this.get('store').findAll('employee-period-slice'),
      employeeObservation: this.store.query('employee-observation', queryParams)
    });
  }
});
