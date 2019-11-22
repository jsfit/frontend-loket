import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({


  init(){
    this._super(...arguments);
    this.get("currentKey") === "numberOfPersons"? this.set("step", "1") : this.set("step", "0.01")
  },

  didChanged: computed('obs.@each.{numberOfFtes,numberOfPersons}', function(){
     return Math.random();
  })


});
