import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { set } from '@ember/object';

export default Route.extend({
  model: function() {
    return EmberObject.create();
  },
  setupController: function (controller, model) {
    set(controller, 'triggered', false);
    set(controller, 'model', model);
  }
});
