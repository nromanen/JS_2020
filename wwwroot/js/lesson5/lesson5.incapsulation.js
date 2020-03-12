"use strict";

// Task4.Incapsulation
function Audioplayer() {
    let _volume = 0;
    function _isValidVolumeValue(value) {
        if (value >= 0) {
            _volume = value;
        }
    }
    this.volume = (value) => {
        if (value === undefined) {
            return _volume;
        }
        _isValidVolumeValue(value);
    };
    this.getVolume = () => {
        return _volume;
    };
    this.setVolume = (value) => {
        _isValidVolumeValue(value);
    };
}

let player = new Audioplayer();
console.log(player.getVolume());
player.setVolume(55);
console.log(`Volume: ${player.getVolume()}`);
player.setVolume();
console.log(`Volume: ${player.getVolume()}`);
player.volume(33);
console.log(`Volume: ${player.volume()}`);


// Task5.Incapsulation
function Adder() {
    let _firstNumber = 0;
    let _secondNumber = 0;
    this.result = 0;

    let _calc = (() => {
        this.result = _firstNumber + _secondNumber;
     }).bind(this);

    this.firstNumber = (value) => {
        if (Number.isFinite(value)) {
            _firstNumber = value;
            _calc();
        } else {
            return _firstNumber;
        }
    };
    this.secondNumber = (value) => {
        if (Number.isFinite(value)) {
            _secondNumber = value;
            _calc();
        } else {
            return _secondNumber;
        }
    };
}

let adder1 = new Adder();
console.log(`First number of adder1: ${adder1.firstNumber()}`);
console.log(`Second number of adder1: ${adder1.secondNumber()}`);
console.log(`Result of addre1: ${adder1.result}`);

adder1.firstNumber(3);
console.log(`First number of adder1: ${adder1.firstNumber()}`);
console.log(`Result of addre1: ${adder1.result}`);

adder1.firstNumber("30");
console.log(`First number of adder1: ${adder1.firstNumber()}`);
console.log(`Result of addre1: ${adder1.result}`);

adder1.secondNumber(10);
console.log(`Second number of adder1: ${adder1.secondNumber()}`);
console.log(`Result of addre1: ${adder1.result}`);

adder1.secondNumber(10.5);
console.log(`Second number of adder1: ${adder1.secondNumber()}`);
console.log(`Result of addre1: ${adder1.result}`);