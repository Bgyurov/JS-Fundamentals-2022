function solve(num) {

    for (let i = 1; i <= num; i++) {
        if (i > 9) {
            let resultToInt = 0;
            let resultToString = String(i);
            for (let j = 0; j < resultToString.length; j++) {

                resultToInt = resultToInt + Number(resultToString[j]);
            }
            if (resultToInt == 5 || resultToInt == 7 || resultToInt == 11) {

                console.log(`${i} -> True`);
            } else {
                console.log(`${i} -> False`);

            }

        } else {
            if (i == 5 || i == 7) {
                console.log(`${i} -> True`);
            } else {
                console.log(`${i} -> False`);

            }

        }

    }
}