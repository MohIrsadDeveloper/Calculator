let screen = document.getElementById('display')
console.log(screen);
let buttons = document.querySelectorAll('button');
let screenValue = "";

for(item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;

        if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "=") {
            let b = screen.value = screenValue +" = " + eval(screenValue)
        }
        else {
            let a = screenValue += buttonText;

            screen.value = screenValue;
        }
    })
}

