import { computed } from '@ember/object';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),
  hasActiveChildRoute: computed('router.currentRouteName', function() {
    return this.get('router.currentRouteName').startsWith('personeelsdatabank.personeelsaantallen.')
      && this.get('router.currentRouteName') != 'personeelsdatabank.personeelsaantallen.index';
  })
});
