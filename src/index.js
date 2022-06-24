module.exports = function toReadable(number) {
    let human = "";
    let hundreds = "";
    let tens = "";
    let ones = "";
    let tens2 = "";
    let ones2 = "";

    if ((number.toString().length === 3) && (number.toString()[0] === "1")) hundreds += "one hundred";  
            else if ((number.toString().length === 3) && (number.toString()[0] === "2")) hundreds += "two hundred";
            else if ((number.toString().length === 3) && (number.toString()[0] === "3")) hundreds += "three hundred";
            else if ((number.toString().length === 3) && (number.toString()[0] === "4")) hundreds += "four hundred";
            else if ((number.toString().length === 3) && (number.toString()[0] === "5")) hundreds += "five hundred";
            else if ((number.toString().length === 3) && (number.toString()[0] === "6")) hundreds += "six hundred";
            else if ((number.toString().length === 3) && (number.toString()[0] === "7")) hundreds += "seven hundred";
            else if ((number.toString().length === 3) && (number.toString()[0] === "8")) hundreds += "eight hundred";
            else if ((number.toString().length === 3) && (number.toString()[0] === "9")) hundreds += "nine hundred";
    human += hundreds;

    if ((number.toString().length === 3) && (number.toString()[1] === "1")) {
        if (number.toString()[2] === "1") human += " eleven";
        else if (number.toString()[2] === "2") human += " twelve";
        else if (number.toString()[2] === "3") human += " thirteen";
        else if (number.toString()[2] === "4") human += " fourteen";
        else if (number.toString()[2] === "5") human += " fifteen";
        else if (number.toString()[2] === "6") human += " sixteen";
        else if (number.toString()[2] === "7") human += " seventeen";
        else if (number.toString()[2] === "8") human += " eighteen";
        else if (number.toString()[2] === "9") human += " nineteen";
        else if (number.toString()[2] === "0") human += " ten";
    }
            else if ((number.toString().length === 3) && (number.toString()[1] === "2")) tens += " twenty";
            else if ((number.toString().length === 3) && (number.toString()[1] === "3")) tens += " thirty";
            else if ((number.toString().length === 3) && (number.toString()[1] === "4")) tens += " forty";
            else if ((number.toString().length === 3) && (number.toString()[1] === "5")) tens += " fifty";
            else if ((number.toString().length === 3) && (number.toString()[1] === "6")) tens += " sixty";
            else if ((number.toString().length === 3) && (number.toString()[1] === "7")) tens += " seventy";
            else if ((number.toString().length === 3) && (number.toString()[1] === "8")) tens += " eighty";
            else if ((number.toString().length === 3) && (number.toString()[1] === "9")) tens += " ninety";
    
    human += tens;

        if ((number.toString().length === 3) && (number.toString()[2] === "1") && (number.toString()[1] !== "1")) ones += " one"
            else if ((number.toString().length === 3) && (number.toString()[2] === "2") && (number.toString()[1] !== "1")) ones += " two";
            else if ((number.toString().length === 3) && (number.toString()[2] === "3") && (number.toString()[1] !== "1")) ones += " three";
            else if ((number.toString().length === 3) && (number.toString()[2] === "4") && (number.toString()[1] !== "1")) ones += " four";
            else if ((number.toString().length === 3) && (number.toString()[2] === "5") && (number.toString()[1] !== "1")) ones += " five";
            else if ((number.toString().length === 3) && (number.toString()[2] === "6") && (number.toString()[1] !== "1")) ones += " six";
            else if ((number.toString().length === 3) && (number.toString()[2] === "7") && (number.toString()[1] !== "1")) ones += " seven";
            else if ((number.toString().length === 3) && (number.toString()[2] === "8") && (number.toString()[1] !== "1")) ones += " eight";
            else if ((number.toString().length === 3) && (number.toString()[2] === "9") && (number.toString()[1] !== "1")) ones += " nine";
    
    human += ones;

    if ((number.toString().length === 2) && (number.toString()[0] === "1")) {
        if (number.toString()[1] === "1") human += "eleven";
        else if (number.toString()[1] === "2") human += "twelve";
        else if (number.toString()[1] === "3") human += "thirteen";
        else if (number.toString()[1] === "4") human += "fourteen";
        else if (number.toString()[1] === "5") human += "fifteen";
        else if (number.toString()[1] === "6") human += "sixteen";
        else if (number.toString()[1] === "7") human += "seventeen";
        else if (number.toString()[1] === "8") human += "eighteen";
        else if (number.toString()[1] === "9") human += "nineteen";
        else if (number.toString()[1] === "0") human += "ten";
    }

            else if ((number.toString().length === 2) && (number.toString()[0] === "2")) tens2 += "twenty";
            else if ((number.toString().length === 2) && (number.toString()[0] === "3")) tens2 += "thirty";
            else if ((number.toString().length === 2) && (number.toString()[0] === "4")) tens2 += "forty";
            else if ((number.toString().length === 2) && (number.toString()[0] === "5")) tens2 += "fifty";
            else if ((number.toString().length === 2) && (number.toString()[0] === "6")) tens2 += "sixty";
            else if ((number.toString().length === 2) && (number.toString()[0] === "7")) tens2 += "seventy";
            else if ((number.toString().length === 2) && (number.toString()[0] === "8")) tens2 += "eighty";
            else if ((number.toString().length === 2) && (number.toString()[0] === "9")) tens2 += "ninety";
    
    human += tens2;

        if ((number.toString().length === 2) && (number.toString()[1] === "1") && (number.toString()[0] !== "1")) ones2 += " one"
            else if ((number.toString().length === 2) && (number.toString()[1] === "2") && (number.toString()[0] !== "1")) ones2 += " two";
            else if ((number.toString().length === 2) && (number.toString()[1] === "3") && (number.toString()[0] !== "1")) ones2 += " three";
            else if ((number.toString().length === 2) && (number.toString()[1] === "4") && (number.toString()[0] !== "1")) ones2 += " four";
            else if ((number.toString().length === 2) && (number.toString()[1] === "5") && (number.toString()[0] !== "1")) ones2 += " five";
            else if ((number.toString().length === 2) && (number.toString()[1] === "6") && (number.toString()[0] !== "1")) ones2 += " six";
            else if ((number.toString().length === 2) && (number.toString()[1] === "7") && (number.toString()[0] !== "1")) ones2 += " seven";
            else if ((number.toString().length === 2) && (number.toString()[1] === "8") && (number.toString()[0] !== "1")) ones2 += " eight";
            else if ((number.toString().length === 2) && (number.toString()[1] === "9") && (number.toString()[0] !== "1")) ones2 += " nine";
    
    human += ones2;

    if ((number.toString().length === 1) && (number.toString()[0] === "1")) human += "one";
            else if ((number.toString().length === 1) && (number.toString()[0] === "2")) human += "two";
            else if ((number.toString().length === 1) && (number.toString()[0] === "3")) human += "three";
            else if ((number.toString().length === 1) && (number.toString()[0] === "4")) human += "four";
            else if ((number.toString().length === 1) && (number.toString()[0] === "5")) human += "five";
            else if ((number.toString().length === 1) && (number.toString()[0] === "6")) human += "six";
            else if ((number.toString().length === 1) && (number.toString()[0] === "7")) human += "seven";
            else if ((number.toString().length === 1) && (number.toString()[0] === "8")) human += "eight";
            else if ((number.toString().length === 1) && (number.toString()[0] === "9")) human += "nine";
            else if ((number.toString().length === 1) && (number.toString()[0] === "0")) human += "zero";

    return (human)
    
}
