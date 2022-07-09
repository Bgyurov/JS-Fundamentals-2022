function solve(num) {

    let numToString = num.toString()
    let sum = 0;

    for (let digit of numToString) {
        sum = sum + Number(digit)
    }
    if (sum.toString().includes(9)) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }

}