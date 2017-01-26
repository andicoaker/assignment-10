
/**
 * Ex-09 : reverseString()
 *
 * Write a function called reverseString that takes a string as input
 * and returns a string with the characters in reverse order.
 * (note: can't use .reverse() method )
 *
*/

// INPUT: string

var reverseString = function (string){

  var newString = [ ]

  for (var i = 0; i <= string.length; i++) {
    // console.log(string[i]);
    newString.push(string.charAt(string.length - i));

  }
   return newString.join("");
}

// OUTPUT: string in reverse -

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( reverseString('books') === 'skoob')
console.assert( reverseString('coolness') === 'ssenlooc')
console.assert( reverseString('bedtime') === 'emitdeb')
console.assert( reverseString('yah sure') === 'erus hay')
