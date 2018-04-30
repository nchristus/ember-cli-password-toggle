import { module, test } from 'qunit';
import hbs from 'htmlbars-inline-precompile';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll, triggerEvent } from '@ember/test-helpers';

module('integration: placeholder test', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.set('model', {password: null});
  });

  test('should render placeholder when input field is empty', async function(assert) {
    await render(hbs`{{password-toggle password=model.password placeholder="voodoo"}}`);
    const selector = 'input.ember-password-toggle-input';
    assert.equal(findAll(selector).length, 1);
    assert.equal(find(selector).getAttribute('placeholder'), 'voodoo');
  });

  test('should not render placeholder without attr', async function(assert) {
    await render(hbs`{{password-toggle password=model.password}}`);
    const selector = 'input.ember-password-toggle-input';
    assert.equal(findAll(selector).length, 1);
    assert.equal(find(selector).getAttribute('placeholder'), undefined);
  });

  test('closure actions are supported in addition to legacy ember actions', async function(assert) {
    assert.expect(1);

    this.set('foobar', () => {
      assert.ok(true);
    });

    await render(hbs`{{password-toggle password=model.password action=(action foobar)}}`);

    await triggerEvent('button', 'keypress', { keyCode: 13 });
  });
});
