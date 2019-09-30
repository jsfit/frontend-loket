import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('switch-login');
  this.route('mock-login');

  this.route('contact');

  this.route('legaal', function() {
    this.route('disclaimer');
    this.route('cookieverklaring');
  });

  this.route('mandatenbeheer', function(){
    this.route('mandatarissen', function(){
      this.route('new');
      this.route('new-person');
      this.route('edit', {path: '/:id/edit'});
    });

    this.route('personen', function() {});
    this.route('fracties', function() {});
  });

  this.route('bbcdr', function() {
    this.route('rapporten', function() {
      this.route('new');
      this.route('edit', { path: '/:id' });
    });
  });

  this.route('toezicht', function() {
    this.route('inzendingen', function() {
      this.route('new');
      this.route('edit', { path: '/:id' });
    });
  });

  this.route('berichtencentrum', function() {
    this.route('berichten', function() {
      this.route('conversatie', { path: '/:id' }, function() {});
    });
  });

  this.route('leidinggevendenbeheer', function() {
    this.route('bestuursfuncties', function() {
      this.route('bestuursfunctie', { path: '/:bestuursfunctie_id' }, function() {
        this.route('contact-info');
        this.route('functionarissen', function() {
          this.route('new', function() {});
          this.route('edit', { path: '/:functionaris_id/edit' });
        });
      });
    });
  });

  this.route('personeelsdatabank', function() {
    this.route('personeelsaantallen');
    this.route('voltijdsequivalenten');
    this.route('aantalwerknemers');
  });

  this.route('route-not-found', {
    path: '/*wildcard'
  });

});

export default Router;
