import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { notEmpty } from '@ember/object/computed';

export default Component.extend({
  store: service(),

  tagName: '',

  isValid: notEmpty('model.start'),

  async init() {
    this._super(...arguments);
    const bestuursfunctie = await this.model.bekleedt;
    const bestuursfunctieCode = await bestuursfunctie.rol;

    let queryParams = {};
    if (bestuursfunctieCode.isLeidinggevendAmbtenaar) {
      queryParams =  {
        filter: { ':uri:': 'http://data.vlaanderen.be/id/concept/functionarisStatusCode/45b4b155-d22a-4eaf-be3a-97022c6b7fcd' } // aangesteld
      };
    } else {
      queryParams =  {
        sort: 'label',
        page: { size: 100 }
      };
    }

    const statusOptions = await this.store.query('functionaris-status-code', queryParams);
    this.set('statusOptions', statusOptions);
  }
});
