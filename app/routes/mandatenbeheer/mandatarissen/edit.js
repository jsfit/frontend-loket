import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  async model(params){
    const parentModel = this.modelFor('mandatenbeheer');
    const persoon = await this.get('store').findRecord('persoon', params.id);

    return RSVP.hash({
      bestuurseenheid: parentModel.bestuurseenheid,
      bestuursorganen: parentModel.bestuursorganen,
      persoon
    });
  },

  setupController(controller, model){
    this._super(controller, model);
    this.controllerFor('mandatenbeheer.mandatarissen').set('activeChildRoute', this.get('routeName'));
  },

  deactivate(){
    this.controllerFor('mandatenbeheer.mandatarissen').set('activeChildRoute', '');
  }
});
