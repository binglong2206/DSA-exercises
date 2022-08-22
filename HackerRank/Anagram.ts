// Given 2 strings, compare to check if the 2nd string is an anagram to the 1st string
    /**
     * Anagram is just a word rearranged to something else, 
     * Essentially check if both strings have same characters
     * 
     * Assume all lower case string, no spaces & special characters
     * 
     * */ 

interface StringCount {
    [key: string] : number // Index signature, allows any key with number
}

const checkAnagram = (str1: string, str2: string): boolean => {
    // Check if length same
    if (str1.length ! == str2.length) return false

    // Initialize the empty objects
    const count1: StringCount = {};
    const count2: StringCount = {};

    // Count the strings' characters
    for (let el of str1) {
        count1[el] = (count1[el] || 0) + 1
    }
    for (let el of str2) {
        count2[el] = (count2[el] || 0) + 1
    }

    // Verify frequency match
    for (let key in count1) {
        if (count1[key] !== count2[key]) return false
    }


    return true
}

console.log(checkAnagram('dog', 'ogd'))