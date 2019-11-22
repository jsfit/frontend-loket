import Route from '@ember/routing/route';
import {set, get} from '@ember/object';
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
        'working-time-category'
      ].join(',')
    };
    return hash({
      employeeObservation: this.store.query('employee-observation', queryParams),
      employeePeriodSlice: this.get('store').findAll('employee-period-slice')
    });
  },

  setupController(controller) {
    this._super(...arguments);
    let totalNumberOfPersons = 0;
    let totalNumberOfFtes = 0;

    let personsDeeltijds = 0;
    let personsVoltijds = 0;

    let ftesDeeltijds = 0;
    let ftesVoltijds = 0;



     this.get('store').peekAll('employee-observation').forEach((obs)=> {

       let nop = get(obs, "numberOfPersons");
       let noftes = get(obs, "numberOfFtes");
       let workingTimeCategory = get(obs, "workingTimeCategory.label")

       nop = parseInt(nop ? nop : 0);
       noftes = parseFloat(noftes ? noftes : 0).toFixed(2);

       if (workingTimeCategory === "Deeltijds") {
         personsDeeltijds += nop;
         ftesDeeltijds += noftes;

       } else {
         personsVoltijds += nop;
         ftesVoltijds += noftes;
       }

       totalNumberOfPersons += nop
       totalNumberOfFtes += noftes
    });

    set(controller, 'totalNumberOfPersons', totalNumberOfPersons);
    set(controller, 'totalNumberOfFtes', totalNumberOfFtes);

    set(controller, 'ftesWorkingTimeCategory', {
      voltijds: ftesVoltijds,
      deeltijds:  ftesDeeltijds
    });
    set(controller, 'personsWorkingTimeCategory', {
      voltijds: personsVoltijds,
      deeltijds: personsDeeltijds
    });

  }
});
