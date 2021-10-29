const repeatString = function (str, num) {
  let strings = [];
  console.log(str)
  if (num >= 1) {
    for (let i = 0; i < num; i++) {
      strings.push(str);
    }
    return strings.join("");
    // console.log(strings.join(""))
  } else if ((num = 0)) {
    return "";
  } else if(num<0){
      return 'ERROR'
  }
};

// Do not edit below this line
module.exports = repeatString;
