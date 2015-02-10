import Ember from 'ember';

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
    wrapperClazz: function() {
        return 'ember-password-toggle-wrapper ' + this.get('wrapperClass');
    }.property(),
    buttonClazz: function() {
        return 'ember-password-toggle-btn ' + this.get('buttonClass');
    }.property(),
    inputClazz: function() {
        return 'ember-password-toggle-input ' + this.get('inputClass') ;
    }.property()
});
