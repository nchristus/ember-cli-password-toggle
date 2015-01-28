import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
    model: function() {
        return Ember.Object.create();
    }
});

export default ApplicationRoute;
