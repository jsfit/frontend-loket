import { helper } from '@ember/component/helper';

export function sumOfRow(params) {
  let obs = params[0];
  let e = params[1];
  let currentKey = params[2];

  let totals =  obs.filter(o =>
    o.get('educationalLevel.id') === e.get('id')
  ).reduce((a, b,) =>  a + parseFloat(b.get(currentKey) ? b.get(currentKey): 0), 0);

  return parseInt(totals);

}

export default helper(sumOfRow);
