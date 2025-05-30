/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length) return false;

  let newstr1 = str1.toLowerCase().split("").sort();
  let newstr2 = str2.toLowerCase().split("").sort();

  for (let i = 0 ; i < newstr1.length ; i++) {
    if(newstr1[i] != newstr2[i]) {
      return false;
    }
  }
  return false;

}

module.exports = isAnagram;
