import Route from '@ember/routing/route';
import { get } from '@ember/object';

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
    return this.store.query('employee-observation', queryParams)
  },

  actions:{

    updateStatus() {
      this.store.peekAll('employee-observation').forEach((o)=>{
        get(o, 'hasDirtyAttributes') && o.save();
      });
    },

    rejectStatus() {
      this.store.peekAll('employee-observation').forEach((o)=>{
        get(o, 'hasDirtyAttributes') && o.rollbackAttributes();
      });
    }
  }
});
