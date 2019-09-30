'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'frontend-loket',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    moment: {
      allowEmpty: true,
      includeLocales: ['nl-be'],
      includeTimezone: 'all'
    },
    browserUpdate: {
      vs: {i:11,f:-3,o:-3,s:-3,c:-3},
      style: 'corner',
      l: 'nl',
      shift_page_down: false
    },
    'vo-webuniversum': {
      version: '2.8.3',
      header: '//widgets.vlaanderen.be/widget/live/1f2f13286a664241801cf21cd5a12316',
      footer: '//widgets.vlaanderen.be/widget/live/36cb38a7d97d4ea29cde109aa0994201'
    },
    torii: {
      disableRedirectInitializer: true,
      providers: {
        'acmidm-oauth2': {
          apiKey: 'a2c0d6ea-01b4-4f68-920b-10834a943c27',
          baseUrl: 'https://authenticatie-ti.vlaanderen.be/op/v1/auth',
          scope: 'openid rrn vo profile abb_loketLB',
          redirectUri: 'https://loket.lblod.info/authorization/callback',
          switchUrl: 'https://loket.lblod.info/switch-login',
          logoutUrl: 'https://authenticatie-ti.vlaanderen.be/op/v1/logout'
        }
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
    ENV['torii']['providers']['acmidm-oauth2']['logoutUrl'] = '/logout';
    ENV['vo-webuniversum']['header'] = '/assets/tests/empty-vo-widget.js';
    ENV['vo-webuniversum']['footer'] = '/assets/tests/empty-vo-widget.js';
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  if (process.env.DEPLOY_ENV === 'production') {
    ENV['torii']['providers']['acmidm-oauth2']['apiKey'] = '90a39574-e986-4007-84f2-becf6d9eb481';
    ENV['torii']['providers']['acmidm-oauth2']['baseUrl'] = 'https://authenticatie.vlaanderen.be/op/v1/auth';
    ENV['torii']['providers']['acmidm-oauth2']['switchUrl'] = 'https://loket.lokaalbestuur.vlaanderen.be/switch-login';
    ENV['torii']['providers']['acmidm-oauth2']['redirectUri'] = 'https://loket.lokaalbestuur.vlaanderen.be/authorization/callback';
    ENV['torii']['providers']['acmidm-oauth2']['logoutUrl'] = 'https://authenticatie.vlaanderen.be/op/v1/logout';
    ENV['vo-webuniversum']['header'] = '//widgets.vlaanderen.be/widget/live/f91ec2eea9de4de399ef3e0f19db8c58';
    ENV['vo-webuniversum']['footer'] = '//widgets.vlaanderen.be/widget/live/2833ae2aacff426e9445a336140d7420';
  }

  return ENV;
};
