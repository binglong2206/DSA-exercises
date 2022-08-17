// Given an array of integers, calculate the ratio% of positives, negatives, and zeros
    // Print results in 3 seperate lines, each to 6 decimals precision

/** STEPS
 * 0) Define a result array with 3 "0" elements : [0,0,0]
 * 1) Loop through integers from input array
 * 2) Re-assign the result array depending on element count from loop
 * 3) Loop result array and return each element divided by input array length
 * 
 */

 function plusMinus(arr: number[]): void {
    // Write your code here
    const results: [number, number, number] = [0,0,0]
    for (let el of arr) {
        if (el > 0 ) results[0] = results[0]++
            else if (el < 0) results[1] = results[1]++
            else results[2] = results[2]++
    };
    
    for (let el of results){
        console.log(el/arr.length);
    }
}
