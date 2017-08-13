import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('password-toggle', 'integration: custom classes test', {
    integration: true
});

test('should recompute custom wrapper class', function(assert) {
    this.render(hbs`{{password-toggle password=password wrapperClass=(if customClass 'custom__class')}}`);
    var component = this.$('div.ember-password-toggle-wrapper');
    assert.equal(component.length, 1);
    assert.notOk(component.hasClass('custom__class'));
    this.set('customClass', true);
    assert.ok(component.hasClass('custom__class'));
});

test('should recompute custom button class', function(assert) {
    this.render(hbs`{{password-toggle password=password buttonClass=(if customClass 'custom__class')}}`);
    var component = this.$('button.ember-password-toggle-btn');
    assert.equal(component.length, 1);
    assert.notOk(component.hasClass('custom__class'));
    this.set('customClass', true);
    assert.ok(component.hasClass('custom__class'));
});

test('should recompute custom input class', function(assert) {
    this.render(hbs`{{password-toggle password=password inputClass=(if customClass 'custom__class')}}`);
    var component = this.$('input.ember-password-toggle-input');
    assert.equal(component.length, 1);
    assert.notOk(component.hasClass('custom__class'));
    this.set('customClass', true);
    assert.ok(component.hasClass('custom__class'));
});