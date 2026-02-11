function createFunction() {
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createFunction();
console.log(f(3, 4)); // 7