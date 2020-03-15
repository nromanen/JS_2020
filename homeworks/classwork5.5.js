function Summator() {
    _firstNumber = 0;
    _secondNumber = 0;
    this.result = 0;

    function calc () {
        result = _firstNumber + _secondNumber;
    }

    function isValidNumber(x) {
        if (typeof (x) === "number"){
            return true;
        } else {
            return false;
        }
    }

    this.getterSetter = function (firstInt, secondInt) {
        if (isValidNumber(firstInt)) {
            _firstNumber = firstInt;
            calc();
        }
        if (isValidNumber(secondInt)) {
            _secondNumber = secondInt;
            calc();
        }
        console.log(result);
    }
}

var constructorSummator = new Summator();
console.log(constructorSummator.result);
constructorSummator.getterSetter(3);
constructorSummator.getterSetter(2, 3);