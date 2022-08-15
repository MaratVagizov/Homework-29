function min (num1, num2) {
    if (typeof(num1) === 'number') {
        if (num1 < num2) {
            return num1;
        }
        else {
            return num2;
        }
    }
    else if (typeof(num1) === 'object' && !num1[0]) {
        if (num1.a < num1.b) {
            return num1.a;
        }
        else {
            return num1.b;
        }
    }
    else {
        if (num1[0] < num1[1]) {
            return num1[0];
        }
        else {
            return num1[1];
        }
    }
}

console.log(`The minimum is ${min([1, 2])}`);
console.log(`The minimum is ${min([3, 4])}`);
console.log(`The minimum is ${min({a:5, b:6})}`);