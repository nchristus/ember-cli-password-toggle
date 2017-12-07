import Ember from 'ember';
import layout from '../templates/components/password-toggle';

const ternary = (keyName, trueValue, falseValue) => {
    return Ember.computed(keyName, function() {
        return this.get(keyName) ? trueValue : falseValue;
    });
};

export default Ember.Component.extend({
    layout,

    isTypeText: false,

    autocomplete: ternary('isTypeText', 'off', null),
    autocorrect: ternary('isTypeText', 'off', null),
    spellcheck: ternary('isTypeText', false, null),
    autocapitalize: ternary('isTypeText', 'off', null),
    type: ternary('isTypeText', 'text', 'password'),

    keyPress(event){
        if(event.keyCode === 13) {
            this.sendAction("action");
        }
    },

    actions: {
        toggleInputType() {
            this.toggleProperty('isTypeText');
        }
    }
});
