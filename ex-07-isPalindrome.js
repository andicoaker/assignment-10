
/**
 * Ex : isPalindrome()
 *
 * Write a function called `isPalindrome` that sees if the word
 * is equal when spelled same backward as it is forward
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/

// INPUT: string


var isPalindrome = function (string){
  var newString =[];
  for (var i = 0; i <= string.length; i++) {
    // console.log(string[i]);
    newString.push(string.charAt(string.length - i));

  }
  var backwardString = newString.join("");
    console.log(string, backwardString)

    if(backwardString === string){
      return true;
    }else{
      return false
    }
}

// OUTPUT: boolean (reduce) - is string the same fwd/bkwd

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( isPalindrome('wow') === true)
console.assert( isPalindrome('milk') === false)
console.assert( isPalindrome('howdy') === false)
console.assert( isPalindrome('kayak') === true)
console.assert( isPalindrome('tacocat') === true)
console.assert( isPalindrome('1201411') === false)
console.assert( isPalindrome('13100131') === true)
