const callback = function(collectedValues, item){
  return [...collectedValues, item]
}

const saying = ['veni','vedi','veci'];
const initialValue = [];
const copy = saying.reduce(callback, initialValue);

console.log('copy',copy)