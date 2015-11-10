import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
    model: function() {
        return Ember.Object.create();
    },
    setupController: function (controller, model) {
        controller.set("triggered", false);
        controller.set("model", model);
    }
});

export default ApplicationRoute;
