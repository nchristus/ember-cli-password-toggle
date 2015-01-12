import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
    model: function() {
        var example = Ember.Object.create({id: 1, password: 'abc123'});
        return example;
    }
});

export default ApplicationRoute;
