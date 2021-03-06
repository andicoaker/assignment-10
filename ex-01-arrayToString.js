/**
 * Ex-01 : arrayToString()
 *
 * Write a function called `arrayToString` that takes
 *  an array of values and combines them into one large string.
 *
 * You must use a for-loop to solve this problem.
 **/

// INPUT: array values

var arrayToString = function(arrayValue){

  var string = '';

  for (var indx = 0; indx < arrayValue.length; indx = indx + 1){
    //DO ALL OF THIS XX NUMBER OF TIMES
    // var counter = indx + 1
    // console.log("before",string, counter)
    // console.log("after",string, counter)
      string = string + arrayValue[indx];
  }
  return string;
}

// OUTPUT: large string


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var output1 = arrayToString(["Hello", "how", "are", "you"])

var coolArr = ['cool', 'great', 'nice', 'awesome', 'sweet']
var output2 = arrayToString(coolArr)

console.assert( output1 === "Hellohowareyou" )
console.assert( output2 === 'coolgreatniceawesomesweet' )
