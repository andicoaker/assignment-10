/**
 * Ex-03 : shortiesOnly()
 *
 * Write a function called `shortiesOnly`.
 * It should as input an array of strings,
 * and it should return a new array containing
 * only those strings with 4 or fewer characters.
 *
*/

// INPUT: array of strings

var shortiesOnly = function (arrOfStrings){

  var newArr = []

  for (var i = 0; i < arrOfStrings.length; i++) {
    // console.log("FOR LOOP", i);

       if(arrOfStrings[i].length < 5){

        //  console.log("if", newArr)
        //  console.log(arrOfStrings[i]);
         newArr.push(arrOfStrings[i]);
       }
  }
  return newArr;
}

// OUTPUT: new arry - only strings 4 char or less


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]

var shortList = shortiesOnly(allNames)

console.assert( shortList.length === 4 )


// checks to see that 'Sam' is INCUDED in the output array.
console.assert( shortList.indexOf('Sam') >= 0 )

// checks to see that 'Fred' is INCUDED in the output array.
console.assert( shortList.indexOf('Fred') >= 0 )

// checks to see that WAYNE is NOT in the output array.
console.assert( shortList.indexOf('Wayne') === -1 )
