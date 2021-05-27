function findFirstDuplicate(arr) {
  // type your code here
  results = []
  for (let i = 0; i < arr.length; i++) {
    if (results.includes(arr[i])) {
      console.log("done")
      return arr[i]
    } else {
      console.log("going")
      results.push(arr[i])
    }
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// Iterate through array, if not in different array, add it to array
// If that number is already in results array return the index; else return -1


// And a written explanation of your solution
