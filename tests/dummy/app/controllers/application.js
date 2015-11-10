import Ember from "ember";

export default Ember.Controller.extend({
    actions: {
        triggerAction: function () {
            this.set("triggered", true);
        }
    }
});