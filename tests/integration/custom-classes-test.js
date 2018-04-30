import { module, test } from 'qunit';
import hbs from 'htmlbars-inline-precompile';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';

module('integration: custom classes test', function(hooks) {
  setupRenderingTest(hooks);

  test('should recompute custom wrapper class', async function(assert) {
    await render(hbs`{{password-toggle password=password wrapperClass=(if customClass 'custom__class')}}`);
    const selector = 'div.ember-password-toggle-wrapper';
    assert.equal(findAll(selector).length, 1);
    assert.notOk(find(selector).classList.contains('custom__class'));
    this.set('customClass', true);
    assert.ok(find(selector).classList.contains('custom__class'));
  });

  test('should recompute custom button class', async function(assert) {
    await render(hbs`{{password-toggle password=password buttonClass=(if customClass 'custom__class')}}`);
    const selector = 'button.ember-password-toggle-btn';
    assert.equal(findAll(selector).length, 1);
    assert.notOk(find(selector).classList.contains('custom__class'));
    this.set('customClass', true);
    assert.ok(find(selector).classList.contains('custom__class'));
  });

  test('should recompute custom input class', async function(assert) {
    await render(hbs`{{password-toggle password=password inputClass=(if customClass 'custom__class')}}`);
    const selector = 'input.ember-password-toggle-input';
    assert.equal(findAll(selector).length, 1);
    assert.notOk(find(selector).classList.contains('custom__class'));
    this.set('customClass', true);
    assert.ok(find(selector).classList.contains('custom__class'));
  });
});
