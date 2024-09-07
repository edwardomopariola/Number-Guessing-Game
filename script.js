const minNum = 1
const maxNum = 100
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let resetBtn = document.getElementById("Reset");
let randomNum = Math.floor(Math.random() * maxNum);


btn.addEventListener('click', function() {
    let input = document.getElementById("userInput").value;

    if (input < randomNum) {
        output.innerHTML = "Number too low, please try again"
    };
    if (input > randomNum) {
        output.innerHTML = "Number too high, Please try again"
    };
    if (input == randomNum) {
        output.innerHTML = "Congratulation you guess the correct number"
    }    
});

// resetBtn.addEventListener("click", function() {
//     Reset = 0;
// });
