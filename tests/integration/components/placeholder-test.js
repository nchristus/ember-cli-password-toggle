import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('password-toggle', 'integration: placeholder test', {
    integration: true,
    setup() {
        this.set('model', {password: null});
    }
});

test('should render placeholder when input field is empty', function(assert) {
    this.render(hbs`{{password-toggle password=model.password placeholder="voodoo"}}`);
    var component = this.$('input.ember-password-toggle-input');
    assert.equal(component.length, 1);
    assert.equal(component.attr('placeholder'), 'voodoo');
});

test('should not render placeholder without attr', function(assert) {
    this.render(hbs`{{password-toggle password=model.password}}`);
    var component = this.$('input.ember-password-toggle-input');
    assert.equal(component.length, 1);
    assert.equal(component.attr('placeholder'), undefined);
});
