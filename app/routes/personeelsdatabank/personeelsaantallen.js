import Route from '@ember/routing/route';
import { set, get } from '@ember/object';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    let queryParams = {
      page: {
        size: 80,
        number: 0
      },
      include: [
        'sex',
        'educational-level',
        'legal-status',
        'working-time-category',
        'slice'
      ].join(',')
    };
    return hash({
      employeePeriodSlice: this.get('store').findAll('employee-period-slice'),
      employeeDataset: this.get('store').findAll('employee-dataset'),
      employeeObservation: this.store.query('employee-observation', queryParams),
    });
  },

  setupController(controller) {
    this._super(...arguments);
    let employeePeriodSlice = this.get('store').peekAll('employee-period-slice');
    employeePeriodSlice.forEach(eps =>{
      let deeltijds = 0
      let voltijds = 0

      eps.get("observation").forEach(obs => {
        let workingTimeCategory = get(obs, "workingTimeCategory.label");
        let value =get(obs, "value");
        value= value ? value : 0;

        if (workingTimeCategory === "Deeltijds") {
          deeltijds += value;
        }else {
          voltijds += value
        }
      });
      
      eps.set("totalDeeltijds", deeltijds);
      eps.set("totalVoltijds", voltijds);
      eps.set("total", deeltijds + voltijds);
    });

    set(controller, 'employeePeriodSlice', employeePeriodSlice);
  }
});
