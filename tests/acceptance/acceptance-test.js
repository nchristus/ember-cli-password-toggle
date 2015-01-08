import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('password toggle acceptance tests', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test("password-toggle test", function() {
    visit('/');
    andThen(function(){
        equal(find('#nick').text(), 'Nick Christus');
    });
});
