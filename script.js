const minNum = 1
const maxNum = 100
let attempt = 0
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let resetBtn = document.getElementById("resetBtn");
let randomNum = Math.floor(Math.random() * maxNum)+ 1
console.log(randomNum);
console.log('attempt', attempt);


btn.addEventListener('click', function() {
    
    let input = document.getElementById("userInput").value;

        if (input < randomNum) {
            output.innerHTML = "Number too low, please try again"
            attempt++
        };
        if (input > randomNum) {
            output.innerHTML = "Number too high, Please try again"
            attempt++
        };
        if (input == randomNum) {
            output.innerHTML = "Congratulation you guess the correct number"
            attempt = 0;
        };
        if (attempt > 3) {
            output.innerHTML = `You've reach your limit, ${randomNum}. was the correct answer. click the reset button to start again`
        };
       
});

resetBtn.addEventListener('click', function() {
    attempt = 0;
    output.innerHTML = "Enter a number";
    let input = document.getElementById("userInput").value;
});

