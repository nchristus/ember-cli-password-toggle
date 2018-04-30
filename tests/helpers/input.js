import $ from 'jquery';
import QUnit from 'qunit';
import { assert } from '@ember/debug';

const assertElement = function(selector, type, count) {
  const element = find(selector);
  QUnit.assert.equal(element.length, count || 1, "element with selector '" + selector + "' not found");
  const actualType = element.attr('type');
  QUnit.assert.equal(actualType, type, selector + ' should be of type ' + type + ' but is ' + actualType);
  return element;
};

const isTextInput = function(selector) {
  assertElement(selector, 'text');
};

const isPasswordInput = function(selector) {
  assertElement(selector, 'password');
};

const isFocused = function(selector) {
  const focused = $(document.activeElement);
  const expected = $(selector);

  if (expected.length > 1) {
    assert('Too many elements for selector ' + selector + ' found that were expected to have focus (' +
      expected.length + '); use a more specific selector');
    return;
  }

  if (focused.length === 0) {
    assert('Expected ' + selector + ' to have focus, but no element currently has focus');
  } else {
    if (focused.is(expected)) {
      QUnit.assert.ok(true);
    } else {
      let tagName = focused.prop('tagName').toLowerCase();
      const classes = focused.attr('class');

      if (classes) {
        tagName = tagName + '.' + classes.replace(/\s+/g, '.');
      }

      QUnit.assert.equal(focused.filter(selector).length, 1, 'Expected ' + selector + ' to have focus, but ' + tagName + ' has focus');
    }
  }
};

export { isTextInput, isPasswordInput, isFocused };
