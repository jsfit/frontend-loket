import { helper } from '@ember/component/helper';

export function inputMapper(params/*, hash*/) {
  let obs = params[0];
  let e = params[1];
  let wt = params[2];
  let el = params[3];
  let g = params[4];

  if(obs && e && wt && el && g){

    return params[0].filter(o =>
      o.get('educationalLevel.id') === e.get('id') &&
      o.get('workingTimeCategory.id') === wt.get('id') &&
      o.get('legalStatus.id') === el.get('id') &&
      o.get('sex.id') === g.get('id')
      )[0];

  }

  return false;
}

export default helper(inputMapper);
