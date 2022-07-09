function solve(string, char, string2) {

    let replace = string.replace("_", char)

    replace == string2 ? console.log("Matched") : console.log("Not Matched");

}