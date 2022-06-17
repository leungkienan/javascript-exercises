const ftoc = function(n) {
  let convForm = 5/9; 
  let i = (n-32)*convForm;
  let conv = Math.round(i*10)/10
  return conv
};

const ctof = function(n) {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
