// Only change code below this line
function myDoWhile () {
    var myNumbers = ""; 
    var str = 0;
    do {
        myNumbers += str;
        if (str < 9) {
            myNumbers += ", ";
        }
        str++;
    } while (str < 10);
    return myNumbers;
}

console.log(myDoWhile());
// Only change code above this line
module.exports = myDoWhile;