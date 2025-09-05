const { jsx } = require("react/jsx-runtime");

function add (numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number" ) {
        return undefined;
    }

    return numOne + numTwo;
}

add ('3',9) ;