import Component from '@ember/component';
import {computed, get, set} from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  store  : service(),
  tagName: 'tbody',

  observations: null,
  currentKey  : "",

  init(){
    this._super(...arguments);
    this.getData();
  },

  getData(){
    let sortedObservations = [];

    this.store.peekAll('employee-observation').forEach((e, i)=>{
      let gender = e.get("sex.label");                  //"Mannelijk" or "Vrouwelijk"
      let el     = e.get("educationalLevel.label");     //"Niveau A" -> "Niveau E"
      let ls     = e.get("legalStatus.label");          //"Contractueel" or "Vastbenoemd"
      let wtc    = e.get("workingTimeCategory.label");  //"Voltijds" or "Deeltijds"
      let index  = -1

      if(gender === "Mannelijk" && ls === "Vastbenoemd" && wtc === "Voltijds" &&  el === "Niveau A"){
        index = 0;
      }else  if(gender === "Vrouwelijk" && ls === "Vastbenoemd" && wtc === "Voltijds" &&  el === "Niveau A"){
        index = 1;
      }else  if(gender === "Mannelijk" && ls === "Contractueel" && wtc === "Voltijds" &&  el === "Niveau A"){
        index = 2;
      }else  if(gender === "Vrouwelijk" && ls === "Contractueel" && wtc === "Voltijds" &&  el === "Niveau A"){
        index = 3;
      }else  if(gender === "Mannelijk" && ls === "Vastbenoemd" && wtc === "Deeltijds" &&  el === "Niveau A"){
        index = 4;
      }else  if(gender === "Vrouwelijk" && ls === "Vastbenoemd" && wtc === "Deeltijds" &&  el === "Niveau A"){
        index = 5;
      }else  if(gender === "Mannelijk" && ls === "Contractueel" && wtc === "Deeltijds" &&  el === "Niveau A"){
        index = 6;
      }else  if(gender === "Vrouwelijk" && ls === "Contractueel" && wtc === "Deeltijds" &&  el === "Niveau A"){
        index = 7;



      }else  if(gender === "Mannelijk" && ls === "Vastbenoemd" && wtc === "Voltijds" &&  el === "Niveau B"){
        index = 8;
      }else  if(gender === "Vrouwelijk" && ls === "Vastbenoemd" && wtc === "Voltijds" &&  el === "Niveau B"){
        index = 9;
      }else  if(gender === "Mannelijk" && ls === "Contractueel" && wtc === "Voltijds" &&  el === "Niveau B"){
        index = 10;
      }else  if(gender === "Vrouwelijk" && ls === "Contractueel" && wtc === "Voltijds" &&  el === "Niveau B"){
        index = 11;
      }else  if(gender === "Mannelijk" && ls === "Vastbenoemd" && wtc === "Deeltijds" &&  el === "Niveau B"){
        index = 12;
      }else  if(gender === "Vrouwelijk" && ls === "Vastbenoemd" && wtc === "Deeltijds" &&  el === "Niveau B"){
        index = 13;
      }else  if(gender === "Mannelijk" && ls === "Contractueel" && wtc === "Deeltijds" &&  el === "Niveau B"){
        index = 14;
      }else  if(gender === "Vrouwelijk" && ls === "Contractueel" && wtc === "Deeltijds" &&  el === "Niveau B"){
        index = 15;


      }else  if(gender === "Mannelijk" && ls === "Vastbenoemd" && wtc === "Voltijds" &&  el === "Niveau C"){
       index = 16;
      }else  if(gender === "Vrouwelijk" && ls === "Vastbenoemd" && wtc === "Voltijds" &&  el === "Niveau C"){
       index = 17;
      }else  if(gender === "Mannelijk" && ls === "Contractueel" && wtc === "Voltijds" &&  el === "Niveau C"){
       index = 18;
      }else  if(gender === "Vrouwelijk" && ls === "Contractueel" && wtc === "Voltijds" &&  el === "Niveau C"){
       index = 19;
      }else  if(gender === "Mannelijk" && ls === "Vastbenoemd" && wtc === "Deeltijds" &&  el === "Niveau C"){
       index = 20;
      }else  if(gender === "Vrouwelijk" && ls === "Vastbenoemd" && wtc === "Deeltijds" &&  el === "Niveau C"){
       index = 21;
      }else  if(gender === "Mannelijk" && ls === "Contractueel" && wtc === "Deeltijds" &&  el === "Niveau C"){
       index = 22;
      }else  if(gender === "Vrouwelijk" && ls === "Contractueel" && wtc === "Deeltijds" &&  el === "Niveau C"){
       index = 23;


      }else  if(gender === "Mannelijk" && ls === "Vastbenoemd" && wtc === "Voltijds" &&  el === "Niveau D"){
       index = 24;
      }else  if(gender === "Vrouwelijk" && ls === "Vastbenoemd" && wtc === "Voltijds" &&  el === "Niveau D"){
       index = 25;
      }else  if(gender === "Mannelijk" && ls === "Contractueel" && wtc === "Voltijds" &&  el === "Niveau D"){
       index = 26;
      }else  if(gender === "Vrouwelijk" && ls === "Contractueel" && wtc === "Voltijds" &&  el === "Niveau D"){
       index = 27;
      }else  if(gender === "Mannelijk" && ls === "Vastbenoemd" && wtc === "Deeltijds" &&  el === "Niveau D"){
       index = 28;
      }else  if(gender === "Vrouwelijk" && ls === "Vastbenoemd" && wtc === "Deeltijds" &&  el === "Niveau D"){
       index = 29;
      }else  if(gender === "Mannelijk" && ls === "Contractueel" && wtc === "Deeltijds" &&  el === "Niveau D"){
       index = 30;
      }else  if(gender === "Vrouwelijk" && ls === "Contractueel" && wtc === "Deeltijds" &&  el === "Niveau D"){
       index = 31;


      }else  if(gender === "Mannelijk" && ls === "Vastbenoemd" && wtc === "Voltijds" &&  el === "Niveau E"){
        index = 32;
      }else  if(gender === "Vrouwelijk" && ls === "Vastbenoemd" && wtc === "Voltijds" &&  el === "Niveau E"){
        index = 33;
      }else  if(gender === "Mannelijk" && ls === "Contractueel" && wtc === "Voltijds" &&  el === "Niveau E"){
        index = 34;
      }else  if(gender === "Vrouwelijk" && ls === "Contractueel" && wtc === "Voltijds" &&  el === "Niveau E"){
        index = 35;
      }else  if(gender === "Mannelijk" && ls === "Vastbenoemd" && wtc === "Deeltijds" &&  el === "Niveau E"){
        index = 36;
      }else  if(gender === "Vrouwelijk" && ls === "Vastbenoemd" && wtc === "Deeltijds" &&  el === "Niveau E"){
        index = 37;
      }else  if(gender === "Mannelijk" && ls === "Contractueel" && wtc === "Deeltijds" &&  el === "Niveau E"){
        index = 38;
      }else  if(gender === "Vrouwelijk" && ls === "Contractueel" && wtc === "Deeltijds" &&  el === "Niveau E"){
        index = 39;
      }

      if( index !== -1 ){
        sortedObservations[index] = e;
      }

    });
     set(this, 'observations' , sortedObservations);
  },


  observationsSet1: computed("observations", function(){
      return get(this,"observations") &&  get(this,"observations").slice(0, 8);
  }),

  observationsSet2: computed("observations", function(){
      return get(this,"observations") && get(this,"observations").slice(8, 16);
  }),

  observationsSet3: computed("observations", function(){
      return get(this,"observations") && get(this,"observations").slice(16, 24);
  }),

  observationsSet4: computed("observations", function(){
      return get(this,"observations") && get(this,"observations").slice(24, 32);
  }),

  observationsSet5: computed("observations", function(){
      return get(this,"observations") && get(this,"observations").slice(32, 40);
  }),

  stackObservations: computed("observationsSet1.@each.{numberOfFtes,numberOfPersons}",
  "observationsSet2.@each.{numberOfFtes,numberOfPersons}",
  "observationsSet3.@each.{numberOfFtes,numberOfPersons}",
  "observationsSet4.@each.{numberOfFtes,numberOfPersons}",
  "observationsSet5.@each.{numberOfFtes,numberOfPersons}",
  "sumOfLevelA", "sumOfLevelB", "sumOfLevelC", "sumOfLevelD", "sumOfLevelE", function(){
    return this.setLevelProperties();
}),

  sumOfLevelA: computed("observationsSet1.@each.{numberOfFtes,numberOfPersons}", function(){
    return this.getRowSum(get(this, "observationsSet1"));
  }),

  sumOfLevelB: computed("observationsSet2.@each.{numberOfFtes,numberOfPersons}", function(){
    return this.getRowSum(get(this, "observationsSet2"));
  }),

  sumOfLevelC: computed("observationsSet3.@each.{numberOfFtes,numberOfPersons}", function(){
    return this.getRowSum(get(this, "observationsSet3"));
  }),

  sumOfLevelD: computed("observationsSet4.@each.{numberOfFtes,numberOfPersons}", function(){
    return this.getRowSum(get(this, "observationsSet4"));
  }),

  sumOfLevelE: computed("observationsSet5.@each.{numberOfFtes,numberOfPersons}", function(){
    return this.getRowSum(get(this, "observationsSet5"));
  }),


  subtotalColumn0: computed("observationsSet1.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet2.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet3.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet4.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet5.@each.{numberOfFtes,numberOfPersons}", function(){
      return this.getColumnSum(0);
  }),

  subtotalColumn1: computed("observationsSet1.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet2.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet3.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet4.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet5.@each.{numberOfFtes,numberOfPersons}", function(){
      return this.getColumnSum(1);
  }),

  subtotalColumn2: computed("observationsSet1.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet2.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet3.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet4.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet5.@each.{numberOfFtes,numberOfPersons}", function(){
      return this.getColumnSum(2);
  }),

  subtotalColumn3: computed("observationsSet1.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet2.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet3.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet4.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet5.@each.{numberOfFtes,numberOfPersons}", function(){
      return this.getColumnSum(3);
  }),

  subtotalColumn4: computed("observationsSet1.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet2.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet3.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet4.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet5.@each.{numberOfFtes,numberOfPersons}", function(){
      return this.getColumnSum(4);
  }),

  subtotalColumn5: computed("observationsSet1.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet2.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet3.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet4.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet5.@each.{numberOfFtes,numberOfPersons}", function(){
      return this.getColumnSum(5);
  }),

  subtotalColumn6: computed("observationsSet1.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet2.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet3.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet4.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet5.@each.{numberOfFtes,numberOfPersons}", function(){
      return this.getColumnSum(6);
  }),

  subtotalColumn7: computed("observationsSet1.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet2.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet3.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet4.@each.{numberOfFtes,numberOfPersons}",
    "observationsSet5.@each.{numberOfFtes,numberOfPersons}", function(){
      return this.getColumnSum(7);
    }),

  subtotalColumn01: computed("subtotalColumn0", "subtotalColumn1", function(){
    return get(this,"subtotalColumn0") + get(this, "subtotalColumn1");
  }),

  subtotalColumn23: computed("subtotalColumn2", "subtotalColumn3", function(){
    return get(this,"subtotalColumn2") + get(this, "subtotalColumn3");
    }),

  subtotalColumn45: computed("subtotalColumn4", "subtotalColumn5", function(){
    return get(this,"subtotalColumn4") + get(this, "subtotalColumn5");
  }),

  subtotalColumn67: computed("subtotalColumn6", "subtotalColumn7", function(){
    return get(this,"subtotalColumn6") + get(this, "subtotalColumn7");
  }),

  totalVoltijds: computed("subtotalColumn01", "subtotalColumn23", function(){
    return get(this,"subtotalColumn01") + get(this, "subtotalColumn23");
  }),

  totalDeeltijds: computed("subtotalColumn45", "subtotalColumn67", function(){
    return get(this,"subtotalColumn45") + get(this, "subtotalColumn67");
  }),

  total: computed("totalVoltijds", "totalDeeltijds", function(){
      return get(this,"totalVoltijds") + get(this, "totalDeeltijds");
  }),

  getRowSum(obj){
    let t = 0;
    let keyOf = get(this, "currentKey");

    obj && obj.forEach( p=>{
        if(!p) return;
      let toAdd = p.get(`${keyOf}`);

      t += parseInt(toAdd?toAdd:0, 10);
    })
      return t;
  },

  getColumnSum(index){
    let t = 0;
    let keyOf = get(this, "currentKey");

    let newSet = [
      get(this, "observationsSet1"),
      get(this, "observationsSet2"),
      get(this, "observationsSet3"),
      get(this, "observationsSet4"),
      get(this, "observationsSet5"),
    ]

    newSet && newSet.forEach(p =>{
      if(!p) return;
      if(!p[index]) return;
      let toAdd = p[index].get(keyOf);
      t += parseInt(toAdd?toAdd:0, 10);
    });

    return t;
  },

  setLevelProperties(){
    let levelA = get(this, "observationsSet1"),
        levelB = get(this, "observationsSet2"),
        levelC = get(this, "observationsSet3"),
        levelD = get(this, "observationsSet4"),
        levelE = get(this, "observationsSet5");

    set(levelA, "title", "Niveau A")
    set(levelA, "sumOfLevel", get(this,"sumOfLevelA"));

    set(levelB, "title", "Niveau B")
    set(levelB, "sumOfLevel", get(this,"sumOfLevelB"));

    set(levelC, "title", "Niveau C")
    set(levelC, "sumOfLevel", get(this,"sumOfLevelC"));

    set(levelD, "title", "Niveau D")
    set(levelD, "sumOfLevel", get(this,"sumOfLevelD"));

    set(levelE, "title", "Niveau E")
    set(levelE, "sumOfLevel", get(this,"sumOfLevelE"));


    return [ levelA, levelB, levelC, levelD, levelE ];
  }

});
