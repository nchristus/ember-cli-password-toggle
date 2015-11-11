import Ember from 'ember';
import { test, module } from 'qunit';
import startApp from '../helpers/start-app';
import {isFocused, isTextInput, isPasswordInput} from '../helpers/input';

var application;

var PASSWORD_INPUT_ONE = 'input.ember-password-toggle-input:eq(0)';
var PASSWORD_INPUT_TWO = 'input.ember-password-toggle-input:eq(1)';
var PASSWORD_INPUT_THREE = 'input.ember-password-toggle-input:eq(2)';
var PASSWORD_BUTTON_ONE = 'button.ember-password-toggle-btn:eq(0)';
var PASSWORD_BUTTON_TWO = 'button.ember-password-toggle-btn:eq(1)';
var PASSWORD_WRAPPER_ONE = 'div.ember-password-toggle-wrapper:eq(0)';
var PASSWORD_WRAPPER_TWO = 'div.ember-password-toggle-wrapper:eq(1)';

module('password toggle acceptance tests', {
    setup: function() {
        application = startApp();
    },
    teardown: function() {
        Ember.run(application, application.destroy);
    }
});

test('password toggle triggers action on enter', function(assert) {
    visit('/');

    andThen(function(){
        assert.equal(find("#action-triggered").length, 0);
    });

    fillIn(PASSWORD_INPUT_THREE, "foo");

    keyEvent(PASSWORD_INPUT_THREE, "keypress", 13);

    andThen(function(){
        assert.equal(find("#action-triggered").length, 1);
    });

});

test('password-toggle test', function(assert) {
    visit('/');
    andThen(function(){
        assert.equal(find(PASSWORD_INPUT_ONE).attr('type'), 'password');
        assert.ok(find(PASSWORD_INPUT_ONE).hasClass('text-input'));
        assert.equal(find(PASSWORD_BUTTON_ONE).text(), 'Show');
        assert.equal(find(PASSWORD_BUTTON_ONE).attr('type'), 'button');
        assert.equal(find(PASSWORD_BUTTON_ONE).attr('tabindex'), '-1');
    });

    click(PASSWORD_BUTTON_ONE);
    andThen(function(){
        assert.equal(find(PASSWORD_BUTTON_ONE).text(), 'Hide');
        assert.equal(find(PASSWORD_INPUT_ONE).attr('type'), 'text');
    });

    click(PASSWORD_BUTTON_ONE);
    andThen(function(){
        assert.equal(find(PASSWORD_BUTTON_ONE).text(), 'Show');
        assert.equal(find(PASSWORD_INPUT_ONE).attr('type'), 'password');
    });
});

test('password-toggle allows custom inputId to be passed in', function(assert) {
    visit('/');
    andThen(function() {
        assert.ok(find(PASSWORD_INPUT_ONE).attr('id').indexOf('ember') > -1);
        assert.equal(find(PASSWORD_INPUT_TWO).attr('id'), 'password');
    });
});

test('password-toggle allows custom tabindex to be passed in', function(assert) {
    visit('/');
    andThen(function() {
        assert.equal(find(PASSWORD_INPUT_TWO).attr('tabindex'), 3);
        assert.equal(find(PASSWORD_INPUT_ONE).attr('tabindex'), undefined);
    });
});

test('password-toggle allows custom classes to be passed in', function(assert) {
    visit('/');
    andThen(function() {
        assert.equal(find('.password1').length, 1);
        assert.equal(find(PASSWORD_INPUT_ONE).hasClass('password1'), true);
        assert.equal(find(PASSWORD_INPUT_ONE).hasClass('text-input'), true);
        assert.equal(find(PASSWORD_INPUT_TWO).hasClass('confirm-password2'), true);
        assert.equal(find(PASSWORD_INPUT_TWO).hasClass('text-input'), true);
        assert.equal(find(PASSWORD_BUTTON_ONE).hasClass('buttonPassword1'), true);
        assert.equal(find(PASSWORD_BUTTON_TWO).hasClass('buttonPassword2'), true);
        assert.equal(find(PASSWORD_WRAPPER_ONE).hasClass('wrapperPassword1'), true);
        assert.equal(find(PASSWORD_WRAPPER_TWO).hasClass('wrapperPassword2'), true);
    });
});

test('password-toggle will show and hide the password when clicking the SHOW/HIDE button', function(assert) {
    visit('/');
    andThen(function() {
        isPasswordInput('input.password1');
    });
    click(PASSWORD_BUTTON_ONE);
    andThen(function() {
        isTextInput('input.password1');
    });
    click(PASSWORD_BUTTON_ONE);
    andThen(function() {
        isPasswordInput('input.password1');
    });
});

test('password-toggle allows focus to be set', function() {
    visit('/');
    andThen(function() {
        isFocused(PASSWORD_INPUT_ONE);
    });
});

test('password-toggle input remains bound to the model', function(assert) {
    var model;
    visit('/');
    andThen(function(){
        model = application.__container__.lookup('route:application').currentModel;
        model.set('password', 'A');
    });
    andThen(function() {
        assert.equal(find(PASSWORD_INPUT_ONE).val(), 'A');
    });
    fillIn(PASSWORD_INPUT_ONE, 'B');
    andThen(function() {
        assert.equal(model.get('password'), 'B');
    });
    click(PASSWORD_BUTTON_ONE);
    fillIn(PASSWORD_INPUT_ONE, 'C');
    andThen(function() {
        assert.equal(model.get('password'), 'C');
    });
    click(PASSWORD_BUTTON_ONE);
    fillIn(PASSWORD_INPUT_ONE, 'D');
    andThen(function() {
        assert.equal(model.get('password'), 'D');
    });
});
