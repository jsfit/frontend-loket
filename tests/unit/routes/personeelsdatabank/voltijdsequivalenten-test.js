import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | personeelsdatabank/voltijdsequivalenten', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:personeelsdatabank/voltijdsequivalenten');
    assert.ok(route);
  });
});
