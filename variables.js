var oranges = 5;
var speed = 'fast';
var hasDog = true;
var nothing = null;
var nothing1 = undefined;
// built-in objects
var now = new Date();
// array
var colors = ['red', 'yellow', 'grey'];
var numbers = [1, 2, 3];
var results = [false, true, true];
//classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
//object literal
var point = {
    x: 10,
    y: 20,
};
// functions
var logNumber = function (i) {
    console.log(i);
};
// When to use type annotations
// 1) Function returns the 'any' type
var json = '{"x":10, "y":20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
//2) When we declare a variable on one line and initialize it later
var words = ['one', 'two', 'three'];
var isTwo;
for (var i = 0; i < words.length; i++) {
    if (words[i] == 'two') {
        isTwo = true;
    }
}
// 3) Variables whoes types can't be inferred 
var myNumbers = [-10, -1, 12];
var positiveNumber = false;
for (var i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] > 0) {
        positiveNumber = myNumbers[i];
    }
}
