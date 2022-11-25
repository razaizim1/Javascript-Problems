function bricksCalculator(floor) {
    var totalBricks = 0;

    if (floor <= 10) {
        totalBricks = (floor * 15) * 1000;
    } else if (floor <= 20) {
        var oneToTen = (10 * 15) * 1000;
        var remaining = floor - 10;
        var elevenToTwenty = (remaining * 12) * 1000;
        totalBricks = oneToTen + elevenToTwenty;
    } else {
        var oneToTen = (10 * 15) * 1000;
        var elevenToTwenty = (10 * 12) * 1000;
        var remaining = floor - 20;
        var twentyOneToInfinity = (remaining * 10) * 1000;
        totalBricks = oneToTen + elevenToTwenty + twentyOneToInfinity;
    }
    return totalBricks;
}

console.log(bricksCalculator(15));