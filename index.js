function isPalindrome(word) {
  const array = word.split("")
  const reverseArray = array.reverse();
  const reverseString = reverseArray.join("");
  if (word === reverseString) {
    return true
  } else { return false
  }
  }

/* 
  Add your pseudocode here
*/

//find the length of the string
//use a for loop to iterate through 1/2 of the string
//check and see if the first and last string are the same 
//return true if they are the same
//return false is ther are not the same 


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
