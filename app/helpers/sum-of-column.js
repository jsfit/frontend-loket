import { helper } from '@ember/component/helper';

export function sumOfColumn(params) {
  let currentKey = params[1];
  let obs = params[2];
  let wtc = params[3];
  let els = params[4];
  let g = params[5];

  let totals = obs.filter(o =>
    (!wtc || o.get('workingTimeCategory.id') === wtc.get('id')) &&
    (!els || o.get('legalStatus.id') === els.get('id')) &&
    (!g || o.get('sex.id') === g.get('id'))
  ).reduce((a, b, ) => a + parseFloat(b.get(currentKey) ? b.get(currentKey) : 0, 2), 0);

  return parseInt(totals); 
}
export default helper(sumOfColumn);
