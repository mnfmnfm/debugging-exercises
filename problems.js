// Problem 1. This function is supposed to put two words together, but it isn't
// working.

function combineWords(word1, word2) {
  return word1 + - + word2;
}

console.log("combining hello and world gives", combineWords("hello", "world"), "(should be hello-world)");
console.log("combining this and time gives", combineWords("this", "time"), "(should be this-time)");

// Problem 2. Tried a different approach, but not working

function combineWordsWithDash(word1, word2) {
  return '${word1}-${word2}';
}

console.log("combining hello and world gives", combineWordsWithDash("hello", "world"), "(should be hello-world)");
console.log("combining this and time gives", combineWordsWithDash("this", "time"), "(should be this-time)");

// Problem 3. Finds the highest number in an array.

function findMax(arr) {
  let max = arr[0];
  for(let i = 1; i < arr.length; i--) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log("finding the max in [1,2,3,4] gives", findMax([1,2,3,4]), "(should be 4)");
console.log("finding the max in [12,6,14,3] gives", findMax([12,6,14,3]), "(should be 14)");

// Problem 4. New approach for finding the max.
function findMaxTwo(arr) {
  let max = arr[0];
  for(let num in arr) {
    if(num > max) {
      max = num;
    } else {
      return max;
    }
  }
  return max;
}

console.log("finding the max in [1,2,3,4] gives", findMaxTwo([1,2,3,4]), "(should be 4)");
console.log("finding the max in [12,6,14,3] gives", findMaxTwo([12,6,14,3]), "(should be 14)");
