function plusMinus(arr: number[]): void {
    // Write your code here
    const results: [number, number, number] = [0,0,0]
    for (let el of arr) {
        if (el > 0 ) results[0] += 1
            else if (el < 0) results[1] +=1
            else results[2] += 1
    };
    
    for (let el of results){
        console.log((el/arr.length).toFixed(6));
    }
    // results.forEach(el => {
    //     console.log((el/arr.length).toFixed(6))
    // })
}