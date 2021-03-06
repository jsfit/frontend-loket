import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  binnenFractie: belongsTo('fractie', { inverse: null }),
  lid: belongsTo('mandataris', { inverse: 'heeftLidmaatschap' }),
  lidGedurende: belongsTo('tijdsinterval', { inverse: null })
});
