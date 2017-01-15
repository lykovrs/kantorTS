var Accumulator = (function () {
    function Accumulator(startValue) {
        this.value = startValue;
    }
    Accumulator.prototype.read = function () {
        this.value += +prompt("Add number", "");
    };
    return Accumulator;
}());
