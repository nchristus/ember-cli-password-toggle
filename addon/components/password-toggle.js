import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function() {
        $('button').on('click', function(){
          var text = $(this).text();
          var $parent = $(this).parent();
          var $input = $('input', $parent).clone();

          $('input', $parent).remove();

          if (text === 'Show') {
            $(this).text('Hide');
            $input.attr("type", "text").appendTo($parent);
          } else if (text === 'Hide') {
            $(this).text('Show');
            $input.attr("type", "password").appendTo($parent);
          }
        });
    }
});
