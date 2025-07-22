/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value
 * squared in the second array.
 * The frequency of values must be the same.
 *
 * eg:
 *
 * same([1,2,3], [4,1,9]) => true;
 * same([1,2,3], [1,9]) => false;
 * same([1,2,1], [4,4,1]) => false;
 */

// Best Solution - O(N)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // here we are trying to find occurance of a value number of times.
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  //  here we are matching key and then matching number of times of occurance for both objects for the key
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// Both the below Naive solution TIME COMPLEXITY is N^2
// C-Naive solution
function same2(ar1, ar2) {
  if (ar1.length !== ar2.length) return false;
  for (let i = 0; i < ar1.length; i++) {
    let correctIndex = ar2.indexOf(ar1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    ar2.splice(correctIndex, 1);
  }
  return true;
}

// My Naive Solution
function same1(ar1 = [], ar2 = []) {
  if (ar1.length <= 0 || ar2.length <= 0) return false;
  if (ar1.length != ar2.length) return false;
  const matchArray = [...ar2];
  for (let i = 0; i < ar1.length; i++) {
    let val = ar1[i] * ar1[i];
    let removeIndex = matchArray.findIndex((v) => v === val);
    if (removeIndex >= 0) {
      matchArray.splice(removeIndex, 1);
    }
  }
  return matchArray.length > 0 ? false : true;
}

/*
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
console.log(
  same(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 234, 123, 333, 554, 4545],
    [9, 1, 4, 45, 23, 45, 22, 987, 123, 3423, 2, 45, 44, 32]
  )
); */

/**
 * ---- Anagrams
 * Given tow strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another,
 * such as cinema, formed from iceman.
 *
 * eg:
 * '', '' => true
 * 'aaz', 'zza' => falase
 * 'anagram', 'nagaram' => true
 * 'rat', 'car' => false
 * 'awesome', 'awesom' => false
 * 'qwerty', 'qeywrt' => true
 * 'texttwisttime', 'timetwisttext' => true
 */

// My solution
function anagramSame1(str1 = "", str2 = "") {
  if (str1.length !== str2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!frequencyCounter2[key]) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}

// course solution
function anagramSame(first, second) {
  if (first.length !== second.length) return false;
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(anagramSame("", ""));
console.log(anagramSame("aaz", "zza"));
console.log(anagramSame("anagram", "nagaram"));
console.log(anagramSame("rat", "car"));
console.log(anagramSame("awesome", "awesom"));
console.log(anagramSame("qwerty", "qeywrt"));
console.log(anagramSame("texttwisttime", "timetwisttext"));
