import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function() {
        $('button').on('click', function() {
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
    }
});
