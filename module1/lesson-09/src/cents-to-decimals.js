//  cents-to-decimals.js
 
// Converts a value from cents to a floating point number with 2 decimals
function centsToDecimals(cents) {
    if(!cents) return 0;
    if(typeof cents === 'string') return undefined;
    const convertCents = (cents/100).toFixed(2)
    return Number(convertCents);
}