// Only change code below this line
function inverseWhile() {
    var fiveNumbers = "", str = 5;
    while (str >= 0) {
        fiveNumbers += str;
        if (str > 0) {
            fiveNumbers += ",";
        }
        str--;
    }
    return fiveNumbers;
}

console.log(inverseWhile());
// Only change code above this line
module.exports = inverseWhile;