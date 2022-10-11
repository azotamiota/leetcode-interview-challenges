/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = String(x)[0] === '-'
    const result = isNegative ? 
          -String(x).split``.slice(1).reverse().join`` : +String(x).split``.reverse().join``
    return result >= 2 ** 31 || result < -(2 ** 31) ? 0 : result
};
