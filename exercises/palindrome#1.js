'use strict';

/**
 * Given a string, return true if the string is a palindrome or false if it is not.
 * @param str {string} The string in question.
 * @return {boolean} True or false depending on whether it's a palindrome.
 * @example palindrome('wow'); // => true
 */
function palindrome(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('');

  return str === reversed;
}

module.exports = palindrome;
