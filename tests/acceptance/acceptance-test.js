import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var application;

module('password toggle acceptance tests', {
    setup: function() {
        application = startApp();
    },
    teardown: function() {
        Ember.run(application, application.destroy);
    }
});

test("password-toggle test", function() {
    visit('/');
    andThen(function(){
        equal(find('input.ember-password-toggle-input').attr('type'), 'password');
        ok(find('input.ember-password-toggle-input').hasClass('text-input'));
        equal(find('button.ember-password-toggle-btn').text(), 'Show');
        equal(find('button.ember-password-toggle-btn').attr('type'), 'button');
        equal(find('button.ember-password-toggle-btn').attr('tabindex'), '-1');
    });

    click('button.ember-password-toggle-btn');
    andThen(function(){
        equal(find('button.ember-password-toggle-btn').text(), 'Hide');
        equal(find('input.ember-password-toggle-input').attr('type'), 'text');
    });

    click('button.ember-password-toggle-btn');
    andThen(function(){
        equal(find('button.ember-password-toggle-btn').text(), 'Show');
        equal(find('input.ember-password-toggle-input').attr('type'), 'password');
    });
});

test("password-toggle input remains bound to the model", function() {
    visit('/');
    var model = application.__container__.lookup('route:application').currentModel;

    Ember.run(function() {
        model.set('password', 'A');
    });
    andThen(function() {
        equal(find('input.ember-password-toggle-input').val(), 'A');
    });

    fillIn('input.ember-password-toggle-input', 'B');
    andThen(function() {
        equal(model.get('password'), 'B');
    });

    click('button.ember-password-toggle-btn');
    fillIn('input.ember-password-toggle-input', 'C');
    andThen(function() {
        equal(model.get('password'), 'C');
    });

    click('button.ember-password-toggle-btn');
    fillIn('input.ember-password-toggle-input', 'D');
    andThen(function() {
        equal(model.get('password'), 'D');
    });
});
