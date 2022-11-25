function woodCalculator(n) {
    let chairFeet = 1 * n;
    let tableFeet = 3 * n;
    let khatFeet = 5 * n;
    let total = chairFeet + tableFeet + khatFeet;
    return total; 
}

console.log(woodCalculator(12, 10, 8));