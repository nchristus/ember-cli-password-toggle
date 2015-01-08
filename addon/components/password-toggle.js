import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function() {
        $('.ember-password-toggle-btn').on('click', function(){
          var text = $(this).text();
          if (text === 'Show') {
            $(this).text('Hide');
            $('#ember-password-toggle-input').attr("type", "text");
          } else if (text === 'Hide') {
            $(this).text('Show');
            $('#ember-password-toggle-input').attr("type", "password");
          }
        });
    }
});
