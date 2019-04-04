import { module, test } from 'qunit';
import hbs from 'htmlbars-inline-precompile';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerEvent } from '@ember/test-helpers';

module('integration: action test', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.set('model', {password: null});
  });

  test('closure actions are supported in addition to legacy ember actions', async function(assert) {
    assert.expect(1);

    this.set('foobar', () => {
      assert.ok(true);
    });

    await render(hbs`{{password-toggle password=model.password action=(action foobar)}}`);

    await triggerEvent('button', 'keypress', { keyCode: 13 });
  });

  test('ember-cli-password-toggle can be used without defining an action', async function(assert) {
    await render(hbs`{{password-toggle password=model.password}}`);

    await triggerEvent('button', 'keypress', { keyCode: 13 });

    assert.ok(true, 'There was no assertion if no action was defined');
  });
});
