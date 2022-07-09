function solve(a, b, c) {
    let result = a + b + c;
    let stringResult = String(result);
    let isFloat = false;

    for (let i = 0; i < stringResult.length; i++) {
        if (stringResult[i] == ".") {
            isFloat = true;
        }
    }

    if (isFloat == false) {
        console.log(`${result} - Integer`);
    } else {
        console.log(`${result} - Float`);
    }

}