import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	currentSession: service(),
	actions: {
		goToToezicht() {
			this.transitionToRoute('toezicht.inzendingen');
		},
		goToBbcdr() {
			this.transitionToRoute('bbcdr.rapporten');
		},
		goToMandatenbeheer() {
			this.transitionToRoute('mandatenbeheer.mandatarissen');
		},
		goToBerichtencentrum() {
			this.transitionToRoute('berichtencentrum.berichten');
		},
		goToAdministratievegegevens() {
			this.transitionToRoute('administratieve-gegevens');
		},
		goToLeidinggevendenbeheer() {
			this.transitionToRoute('leidinggevendenbeheer.bestuursfuncties');
		},
		goToPersoneelsdatabank() {
			this.transitionToRoute('personeelsdatabank.personeelsaantallen');
		}
	}
});
