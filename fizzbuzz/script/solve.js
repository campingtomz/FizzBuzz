$(document).ready(function () {
    $('#input-submit').click(function () {
        let number1 = parseFloat($('#number1-input').val());
        let number2 = parseFloat($('#number2-input').val());
        clearOutput();
        
        if (checkInputs(number1, number2)) {
            fizzBuzz(number1, number2);
        }
    });
});

function checkInputs(number1, number2) {
    if (isNaN(number1) || isNaN(number2) || !Number.isInteger(number1)  || !Number.isInteger(number2) || number1 < 0 || number1 > 100 || number2 < 0 || number2 > 100) {
        alert("One or both inputs are not valid numbers between 1 and 100")
        return false;
    }
    return true;

}
function clearOutput() {
    $('#row-fizz').empty();
    $('#row-buzz').empty();
    $('#row-fizzbuzz').empty();
}
function fizzBuzz(number1, number2) {
    let fizzCount = 0;
    let buzzCount = 0;
    let fizzBuzzCount = 0;
    let fizzBuzzArray = []
    for (let i = 1; i < 101; i++) {
        if (i % number1 == 0 && i % number2 == 0) {
            fizzBuzzArray.push("FizzBuzz");
            fizzBuzzCount++;
        } else if (i % number1 == 0) {
            fizzBuzzArray.push("Fizz");
            fizzCount++;
        }
        else if (i % number2 == 0) {
            fizzBuzzArray.push("Buzz");
            buzzCount++;
        }
        else {
            fizzBuzzArray.push(i);
        }
    }
    outputValues(fizzCount, buzzCount, fizzBuzzCount, fizzBuzzArray);
    generateChart(fizzCount, buzzCount, fizzBuzzCount);
    $('#ouput-container').show();
};
function outputValues(fizzCount, buzzCount, fizzBuzzCount, fizzBuzzArray) {
    let fizzRow = $('#row-fizz');
    let fizzArray = [];
    let buzzArray = [];
    let fBArray = [];
    let nonfizzbuzzArray = [];
    for (let i = 0; i < fizzBuzzArray.length; i++) {
        if (fizzBuzzArray[i] === "Fizz") {
            fizzArray.push(i + 1);
        } else if (fizzBuzzArray[i] === "Buzz") {
            buzzArray.push(i + 1);
        } else if (fizzBuzzArray[i] === "FizzBuzz") {
            fBArray.push(i + 1);
        }
        else {
            nonfizzbuzzArray.push(i + 1);
        }
    }
    $('#row-fizz').append(generateHTML(fizzCount, "Fizz", fizzArray));
    $('#row-buzz').append(generateHTML(buzzCount, "Buzz", buzzArray));
    $('#row-fizzbuzz').append(generateHTML(fizzBuzzCount, "FizzBuzz", fBArray));
    $('#row-noneFizzBuzz').append(generateHTML((100 - fizzCount - buzzCount - fizzBuzzCount), "None-Fizz-Buzz", nonfizzbuzzArray));

};

function generateHTML(itemCount, itemName, itemArray) {
    let itemPercent = itemCount / 100;
    return `<div class="col-6 outputBox">
                <p>The number of ${itemName}s are ${itemCount}.</p>
                <p>The Percentage of ${itemName} is ${Math.round(itemPercent*100)}%.</p>
                </div>
            <div class="col-6 outputBox" >
                <p> The values associated with ${itemName} are:</p>
                <p>${itemArray.toString()}</p>
            </div>
`
}


function generateChart(fizzCount, buzzCount, fizzBuzzCount) {
    let other = 100 - fizzCount - buzzCount - fizzBuzzCount;
    const ctx = document.getElementById('Chart').getContext('2d');
    const pollChart = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets:[{
                data: [fizzCount, buzzCount, fizzBuzzCount, other],
            
            backgroundColor: [
                '#D62F7E',
                '#869CE0',
                '#2EC74C',
                '#E0BC34'
            ],
            borderColor: 'black'
            }],

            labels: [
                'Fizz',
                'Buzz',
                'FizzBuzz',
                'None-Fizz-Buzz'
            ]

        }//data
    });

}