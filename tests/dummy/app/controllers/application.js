import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    triggerAction: function () {
      set(this, 'triggered', true);
    }
  }
});
