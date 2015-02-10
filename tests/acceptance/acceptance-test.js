import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
import {isFocused, isTextInput, isPasswordInput} from 'ember-cli-test-helpers/tests/helpers/input';

var application;

var PASSWORD_INPUT_ONE = 'input.ember-password-toggle-input:eq(0)';
var PASSWORD_INPUT_TWO = 'input.ember-password-toggle-input:eq(1)';
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

test('password-toggle test', function() {
    visit('/');
    andThen(function(){
        equal(find(PASSWORD_INPUT_ONE).attr('type'), 'password');
        ok(find(PASSWORD_INPUT_ONE).hasClass('text-input'));
        equal(find(PASSWORD_BUTTON_ONE).text(), 'Show');
        equal(find(PASSWORD_BUTTON_ONE).attr('type'), 'button');
        equal(find(PASSWORD_BUTTON_ONE).attr('tabindex'), '-1');
    });

    click(PASSWORD_BUTTON_ONE);
    andThen(function(){
        equal(find(PASSWORD_BUTTON_ONE).text(), 'Hide');
        equal(find(PASSWORD_INPUT_ONE).attr('type'), 'text');
    });

    click(PASSWORD_BUTTON_ONE);
    andThen(function(){
        equal(find(PASSWORD_BUTTON_ONE).text(), 'Show');
        equal(find(PASSWORD_INPUT_ONE).attr('type'), 'password');
    });
});

test('password-toggle allows custom classes to passed in', function() {
    visit('/');
    andThen(function() {
        equal(find('.password1').length, 1);
        equal(find(PASSWORD_INPUT_ONE).hasClass('password1'), true);
        equal(find(PASSWORD_INPUT_ONE).hasClass('text-input'), true);
        equal(find(PASSWORD_INPUT_TWO).hasClass('confirm-password2'), true);
        equal(find(PASSWORD_INPUT_TWO).hasClass('text-input'), true);
        equal(find(PASSWORD_BUTTON_ONE).hasClass('buttonPassword1'), true);
        equal(find(PASSWORD_BUTTON_TWO).hasClass('buttonPassword2'), true);
        equal(find(PASSWORD_WRAPPER_ONE).hasClass('wrapperPassword1'), true);
        equal(find(PASSWORD_WRAPPER_TWO).hasClass('wrapperPassword2'), true);
    });
});

test('password-toggle will show and hide the password when clicking the SHOW/HIDE button', function() {
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

test('password-toggle input remains bound to the model', function() {
    visit('/');
    var model = application.__container__.lookup('route:application').currentModel;

    Ember.run(function() {
        model.set('password', 'A');
    });
    andThen(function() {
        equal(find(PASSWORD_INPUT_ONE).val(), 'A');
    });

    fillIn(PASSWORD_INPUT_ONE, 'B');
    andThen(function() {
        equal(model.get('password'), 'B');
    });

    click(PASSWORD_BUTTON_ONE);
    fillIn(PASSWORD_INPUT_ONE, 'C');
    andThen(function() {
        equal(model.get('password'), 'C');
    });

    click(PASSWORD_BUTTON_ONE);
    fillIn(PASSWORD_INPUT_ONE, 'D');
    andThen(function() {
        equal(model.get('password'), 'D');
    });
});
