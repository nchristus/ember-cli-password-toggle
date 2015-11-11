import Ember from 'ember';

var $ = Ember.$;

export default Ember.Component.extend({
    didInsertElement: function() {
        this.$('button').on('click', function() {
            var text = $(this).text();
            var $input = $(this).parent().find('input');

            if (text === 'Show') {
                $(this).text('Hide');
                $input.attr('type', 'text');
            } else if (text === 'Hide') {
                $(this).text('Show');
                $input.attr('type', 'password');
            }
        });
        if(this.get('focus')) {
            this.$('input').focus();
        }
    },
    keyPress: function(event){
        if(event.keyCode === 13) {
            this.sendAction("action");
        }
    },
    wrapperClazz: Ember.computed(function() {
        return 'ember-password-toggle-wrapper ' + this.get('wrapperClass');
    }),
    buttonClazz: Ember.computed(function() {
        return 'ember-password-toggle-btn ' + this.get('buttonClass');
    }),
    inputClazz: Ember.computed(function() {
        return 'ember-password-toggle-input ' + this.get('inputClass') ;
    })
});
