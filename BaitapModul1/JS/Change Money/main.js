function ChangeMoney() {
    let amount = document.getElementById('amount').value;
    let FromV = document.getElementById('From').value;
    let Tod = document.getElementById('To').value;
    let Result;

    if (FromV == "VND" && Tod == "USD") {
        Result = 'Result: ' + (amount / 23000) + '$';
    } else if (FromV == "USD" && Tod == "VND") {
        Result = 'Result: ' + (amonut * 23000) + 'D';
    } else if (FromV == "VND") {
        Result = 'Result' + (amount) + 'D';
    } else {
        Result = 'Result' + (amount) + '$';
    }
    document.getElementById('Result').innerHTML= Result;
}