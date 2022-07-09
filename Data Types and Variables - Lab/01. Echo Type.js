function solve(input) {
    let type = typeof input

    console.log(type);
    if (type === 'object') {
        console.log('Parameter is not suitable for printing');
    } else {
        console.log(input);
    }

}