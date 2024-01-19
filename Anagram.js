function areAnagrams(str1, str2) {
    // Check if the lengths of the strings are equal
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create character frequency maps for both strings
    const frequencyMap1 = {};
    const frequencyMap2 = {};
  
    // Populate the frequency map for the first string
    for (const char of str1) {
      frequencyMap1[char] = (frequencyMap1[char] || 0) + 1;
    }
  
    // Populate the frequency map for the second string
    for (const char of str2) {
      frequencyMap2[char] = (frequencyMap2[char] || 0) + 1;
    }
  
    // Compare the frequency maps
    for (const char in frequencyMap1) {
      if (frequencyMap1[char] !== frequencyMap2[char]) {
        return false;
      }
    }
  
    // If all checks pass, the strings are anagrams
    return true;
  }
  
  // Example usage
  const string1 = "listen";
  const string2 = "silent";
  
  console.log(areAnagrams(string1, string2)); // Output: true
  