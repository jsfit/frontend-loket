import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({

  model() {
    let queryParams = {
      page: {
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
    return this.store.query('employee-observation', queryParams)
  },

  setupController(controller) {
    this._super(...arguments);
    let el = this.store.peekAll('educational-level').sortBy("label");
    let gender = this.store.peekAll('geslacht-code').sortBy("label");
    let wtc = this.store.peekAll('working-time-category');
    let els = this.store.peekAll('employee-legal-status');
    let obs = this.store.peekAll('employee-observation');

    set(controller, 'el', el);
    set(controller, 'wtc', wtc);
    set(controller, 'gender', gender);
    set(controller, 'obs', obs);
    set(controller, 'els', els);
  },


});
