/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const newstr = str.toLowerCase();
    let count = 0;
    for (let index = 0 ; index < newstr.length ; index ++) {
      if (newstr[index] == 'a' ||
          newstr[index] == 'e' ||
          newstr[index] == 'i' ||
          newstr[index] == 'o' ||
          newstr[index] == 'u' 
        ) count ++;
    }
    return count;
    
}

module.exports = countVowels;