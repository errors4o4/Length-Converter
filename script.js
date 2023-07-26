var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
    // result.value = input.value;
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if (inputTypeValue === "meter") {
        if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
            result.value = Number(input.value) * 0.001;
        } else if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {
            result.value = Number(input.value) * 100;
        } else if (inputTypeValue === "meter" && resultTypeValue === "foot") {
            result.value = parseFloat(input.value).toFixed(2) * 3.28;
        } else {
            result.value = input.value
        }
    } else if (inputTypeValue === "kilometer") {
        if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
            result.value = Number(input.value) * 1000;
        } else if (inputTypeValue === "kilometer" && resultTypeValue === "centimeter") {
            result.value = Number(input.value) * 100000;
        } else if (inputTypeValue === "kilometer" && resultTypeValue === "foot") {
            result.value = Number(input.value) * 3280.84;
        } else {
            result.value = input.value
        }
    } else if (inputTypeValue === "centimeter") {
        if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {
            result.value = Number(input.value) * 0.01;
        } else if (inputTypeValue === "centimeter" && resultTypeValue === "kilometer") {
            result.value = Number(input.value) * 0.00001;
        } else if (inputTypeValue === "centimeter" && resultTypeValue === "foot") {
            result.value = Number(input.value) * 0.0328;
        } else {
            result.value = input.value
        }
    } else if (inputTypeValue === "foot") {
        if (inputTypeValue === "foot" && resultTypeValue === "meter") {
            result.value = Number(input.value) * 0.3048;
        } else if (inputTypeValue === "foot" && resultTypeValue === "kilometer") {
            result.value = Number(input.value) * 0.0003048;
        } else if (inputTypeValue === "foot" && resultTypeValue === "centimeter") {
            result.value = Number(input.value) * 30.48;
        } else {
            result.value = input.value
        }
    }
}