import Controller from '@ember/controller';
import { get, computed } from '@ember/object';

export default Controller.extend({

  isObservationsChange: computed("obs.@each.hasDirtyAttributes", function () {
    return !get(this, "obs").filter((o) => get(o, 'hasDirtyAttributes')).length;
  }),

  actions: {

    updateStatus() {
      this.store.peekAll('employee-observation').forEach((o) => {
        get(o, 'hasDirtyAttributes') && o.save();
      });
    },

    rejectStatus() {
      this.store.peekAll('employee-observation').forEach((o) => {
        get(o, 'hasDirtyAttributes') && o.rollbackAttributes();
      });
    }
  }
});
