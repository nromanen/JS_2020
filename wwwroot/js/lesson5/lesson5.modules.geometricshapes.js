"use strict";

// Task6.Modules
export let rectangle = (function() {
    let length = 0;
    let width = 0;
    function _isValueValid(value) {
        return Number.isFinite(value) && (value > 0);
        
    };
    function area() {
        return length * width;
    };
    function perimeter () {
        return 2 * length + 2 * width;
    };
    return {
        length: (value) => {
            if (value === undefined) {
                return length;
            } else {
                if (_isValueValid(value)) {
                    length = value;
                }
            }
        },
        width: (value) => {
            if (value === undefined) {
                return width;
            } else {
                if (_isValueValid(value)) {
                    width = value;
                }
            }
        },
        area: () => {
            return area();
        },
        perimeter: () => {
            return perimeter();
        }
    }
}());
