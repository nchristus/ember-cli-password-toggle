import $ from 'jquery';
import { get, computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { warn } from '@ember/debug';
import Component from '@ember/component';

export default Component.extend({
  didInsertElement: function() {
    this.$('button').on('click', function() {
      var text = $(this).text();
      var $input = $(this).parent().find('input');

      if (text === 'Show') {
        $(this).text('Hide');
        $input.attr('autocomplete', 'off');
        $input.attr('autocorrect', 'off');
        $input.attr('spellcheck', 'off');
        $input.attr('autocapitalize', 'off');
        $input.attr('type', 'text');
      } else if (text === 'Hide') {
        $(this).text('Show');
        $input.removeAttr('autocomplete');
        $input.removeAttr('autocorrect');
        $input.removeAttr('spellcheck');
        $input.removeAttr('autocapitalize');
        $input.attr('type', 'password');
      }
    });
    if(get(this, 'focus')) {
      this.$('input').focus();
    }
  },
  keyPress: function(event){
    if(event.keyCode === 13) {
      const actionToBubble = this.get('action');
      if (typeof actionToBubble === 'string') {
        /* eslint-disable */
        warn('The ember-cli-password-toggle `action` should be a closure action', false, { id: 'ember-cli-password-toggle.action-type' });
        this.sendAction('action');
        /* eslint-enable */
      } else if (!isEmpty(actionToBubble)) {
        actionToBubble();
      }
    }
  },
  wrapperClazz: computed('wrapperClass', function() {
    return 'ember-password-toggle-wrapper ' + get(this, 'wrapperClass');
  }),
  buttonClazz: computed('buttonClass', function() {
    return 'ember-password-toggle-btn ' + get(this, 'buttonClass');
  }),
  inputClazz: computed('inputClass', function() {
    return 'ember-password-toggle-input ' + get(this, 'inputClass') ;
  })
});
