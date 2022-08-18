// Convert AM/PM time to millitary 24H format. 
/** STEPS:
 * 1) Extract the first 2 characters(just index it)
 * 2) Parse Int the 2, "01" will be converted to just 1
 * 3) Add 12 to non-12hr PM only. On hr 12, AM -> 0 PM -> 12
 * 4) Slice the string again starting from index 2
 * 5) if Hour is single int, convert to string and add 0 in front
 * 6) Add the new hour with the new substringsinfront
 */
 function timeConversion(s: string): string {
    // Write your code here
    let hour: number = parseInt(s.slice(0,3));
    
    if (hour === 12 && s[8] === 'A' ) {
        hour = 0
    } else if (hour != 12 && s[8] === 'P') {
        hour += 12
    }

    const newHour: string | number = hour < 10 ? '0' + hour : hour
    const newS: string = newHour + s.slice(2,8);
    
    return newS
}