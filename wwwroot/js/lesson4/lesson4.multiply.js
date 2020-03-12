"use strict";

// Task5. Functions as objects
function mul(...args) {
    let isNumberEvel = false;
    let m = 0;
    args.forEach((element) => {
        if (Number.isFinite(element)) {
            if (!isNumberEvel) {
                m = 1;
                isNumberEvel = true;
            }
            m *= element;
        }
    });
    return m;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
