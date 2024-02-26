const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};
const mult = (a, b) => {
  return a * b;
};

const name = "sahil";
module.exports.addition = add    
//  he exports nantr kahi pn nav dil tri chalty kahi prob nahiye tith 
module.exports = { add, sub, mult, name };
