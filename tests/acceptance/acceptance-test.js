import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
import {isFocused} from 'ember-cli-test-helpers/tests/helpers/input';

var application;

var PASSWORD_INPUT = 'input.ember-password-toggle-input';
var PASSWORD_BUTTON = 'button.ember-password-toggle-btn';

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
        equal(find(PASSWORD_INPUT).attr('type'), 'password');
        ok(find(PASSWORD_INPUT).hasClass('text-input'));
        equal(find(PASSWORD_BUTTON).text(), 'Show');
        equal(find(PASSWORD_BUTTON).attr('type'), 'button');
        equal(find(PASSWORD_BUTTON).attr('tabindex'), '-1');
    });

    click(PASSWORD_BUTTON);
    andThen(function(){
        equal(find(PASSWORD_BUTTON).text(), 'Hide');
        equal(find(PASSWORD_INPUT).attr('type'), 'text');
    });

    click(PASSWORD_BUTTON);
    andThen(function(){
        equal(find(PASSWORD_BUTTON).text(), 'Show');
        equal(find(PASSWORD_INPUT).attr('type'), 'password');
    });
});

test('password-toggle allows custom classes to passed in', function() {
    visit('/');
    andThen(function() {
        equal(find('.password').length, 1);
        equal(find(PASSWORD_INPUT).hasClass('password'), true);
        equal(find(PASSWORD_INPUT).hasClass('wat'), true);
    });
});

test('password-toggle brandon allows focus to be set', function() {
    visit('/');
    andThen(function() {
        isFocused(PASSWORD_INPUT);
    });
});

test('password-toggle input remains bound to the model', function() {
    visit('/');
    var model = application.__container__.lookup('route:application').currentModel;

    Ember.run(function() {
        model.set('password', 'A');
    });
    andThen(function() {
        equal(find(PASSWORD_INPUT).val(), 'A');
    });

    fillIn(PASSWORD_INPUT, 'B');
    andThen(function() {
        equal(model.get('password'), 'B');
    });

    click(PASSWORD_BUTTON);
    fillIn(PASSWORD_INPUT, 'C');
    andThen(function() {
        equal(model.get('password'), 'C');
    });

    click(PASSWORD_BUTTON);
    fillIn(PASSWORD_INPUT, 'D');
    andThen(function() {
        equal(model.get('password'), 'D');
    });
});
