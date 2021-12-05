const reverseString = function(str) {
    let strArr=str.split("")
    let revString=strArr.reverse()
    let joinArr = revString.join("")
    return joinArr;

};

// Do not edit below this line
module.exports = reverseString;
