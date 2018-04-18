// evaluateList code
var evaluateList = [];
evaluateList[0] = [0, 0, 0, 0, 0];
evaluateList[1] = [1, 0, 0, 0, 0];
evaluateList[2] = [0, 1, 0, 0, 0];
evaluateList[3] = [1, 1, 1, 1, 1];

evaluateListForDisplay = JSON.stringify(evaluateList, true, 2);
display = document.querySelector('#evaluate-list').innerHTML = evaluateListForDisplay;

var logicalOperation_ = new logicalOperation();

console.group('logical opelation [AND]');
evaluateList.forEach(function(v) {
    let result = logicalOperation_.AND(v);
    let append = document.createTextNode(result + ", ");
    document.querySelector('#AND').appendChild(append);
    console.log(v, result);
});
console.groupEnd();

console.group('logical opelation [OR]');
evaluateList.forEach(function(v) {
    let result = logicalOperation_.OR(v);
    let append = document.createTextNode(result + ", ");
    document.querySelector('#OR').appendChild(append);
    console.log(v, result);
});
console.groupEnd();

console.group('logical opelation [NAND]');
evaluateList.forEach(function(v) {
    let result = logicalOperation_.NAND(v);
    let append = document.createTextNode(result + ", ");
    document.querySelector('#NAND').appendChild(append);
    console.log(v, result);
});
console.groupEnd();

console.group('logical opelation [NOR]');
evaluateList.forEach(function(v) {
    let result = logicalOperation_.NOR(v);
    let append = document.createTextNode(result + ", ");
    document.querySelector('#NOR').appendChild(append);
    console.log(v, result);
});
console.groupEnd();

console.group('logical opelation [XOR]');
evaluateList.forEach(function(v) {
    let result = logicalOperation_.XOR(v);
    let append = document.createTextNode(result + ", ");
    document.querySelector('#XOR').appendChild(append);
    console.log(v, result);
});
console.groupEnd();

console.group('logical opelation [XNOR]');
evaluateList.forEach(function(v) {
    let result = logicalOperation_.XNOR(v);
    let append = document.createTextNode(result + ", ");
    document.querySelector('#XNOR').appendChild(append);
    console.log(v, result);
});
console.groupEnd();

console.group('logical opelation [XAND]');
evaluateList.forEach(function(v) {
    let result = logicalOperation_.XAND(v);
    let append = document.createTextNode(result + ", ");
    document.querySelector('#XAND').appendChild(append);
    console.log(v, result);
});
console.groupEnd();