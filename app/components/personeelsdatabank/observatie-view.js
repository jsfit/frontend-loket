import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({

  step: 1,

  init(){
    this._super(...arguments);
  },

  didChanged: computed('obs.@each.{value}', function(){
     return Math.random();
  })


});
