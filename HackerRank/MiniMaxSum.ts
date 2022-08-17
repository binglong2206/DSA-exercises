// Given an array of 5 integers, calculate the largest and smallest sums using 4 elements

/** STEPS
 * 1) Sort the array, from small to large. 
 *      1a) sort((a,b) => a-b) -> if >0 sort a after b, if <0 sort b after a
 * 2) Add integers from index 0-3 and 1-4
 * 3) Console.log(Min, Max)
 * 
 */

 function miniMaxSum(arr: number[]): void {
    // Write your code here
    arr.sort((a,b) => a-b);
    console.log(
        (arr[0] + arr[1] + arr[2]+ arr[3]),
        arr[1] + arr[2] + arr[3] + arr[4]
    )
}

