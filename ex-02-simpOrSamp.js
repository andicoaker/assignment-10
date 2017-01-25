
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

    var appString = " "

    for (var i = 0; i < arrOfStrings.length; i++){
      console.log(i);
      console.log(arrOfStrings.length);

      if(arrOfStrings[i].length < 7){
        appString.push (arrOfStrings[i] + "Sampson")
      }

        // var arrOfStringsElement = arrOfStrings.length;
        // if (arrOfStringsElement >= 6) {
        //  return [indx] + "Simpson";
        // } else {
        //  return [indx] + "Sampson";
    }
    return appString
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
