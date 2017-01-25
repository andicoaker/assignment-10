
/**
 * Ex-02 : simpOrSamp()
 *
 * Write a function called `simpOrSamp` that takes an array of strings as input:
 *   If an element in the array is less than 6 characters, append 'Sampson': e.g. "Homer Sampson"
 *   If an element in the array is 6 characters or longer, append 'Simpson': 'Jessica Simpson'
 *
*/
// INPUT: array of strings

var simpOrSamp = function (arrOfStrings){

    var newArr = []


    for (var i = 0; i < arrOfStrings.length; i++){
      // console.log(i);
      // console.log(newArr);
      // console.log(arrOfStrings[i]) + "Sampson";

      if(arrOfStrings[i].length < 6){
        newArr.push(arrOfStrings[i] + " Sampson");
          // console.log(appString);
          // console.log(arrOfStrings[i]) + "Sampson";
      } else {
        newArr.push(arrOfStrings[i] + " Simpson");
      }
    }
    return newArr
}

// OUTPUT: appended string

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]


var modifiedNamesList = simpOrSamp(simpList)

console.assert( modifiedNamesList[1] === 'OJ Sampson' )
console.assert( modifiedNamesList[2] === 'Marge Sampson' )
console.assert( modifiedNamesList[5] === 'Maggie Simpson' )
console.assert( modifiedNamesList[0] !== 'Homer Simpson' )
