
/**
 * Ex-04 : wordMatchInArray()
 *
 * Write a function called `wordMatchInArray` that takes 2 inputs: a string, and an array.
 * The function should return a boolean value if that word is found in the array.
 *
*/

// INPUT: string and array

var wordMatchInArray = function (wordToSearch, wordArray){

  var wordFound = false;

  for (var i = 0; i < wordArray.length; i++) {
      // console.log(i);
      // console.log(wordFound);

    if (wordToSearch === wordArray[i]) {
      wordFound = true;
        // console.log(wordFound);
        // console.log(wordToSearch = wordArray[i]);
    }
  }
    return wordFound
}

// OUTPUT: new boolean - true/false if word found is in the array


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var sampleWordsArray = ["because", "girls", "just", "want", "to", "have", "fun"]

console.assert(wordMatchInArray('girls', sampleWordsArray) === true)
console.assert(wordMatchInArray('fun', sampleWordsArray) === true)
console.assert(wordMatchInArray('boys', sampleWordsArray) === false)

var sampleWordsArray2 = ["boys", "there", "is", "no", "way", "out", "of", "here"]
console.assert(wordMatchInArray('boys', sampleWordsArray2) === true)
console.assert(wordMatchInArray('girls', sampleWordsArray2) === false)
