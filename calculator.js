let screen = document.getElementById("screen")
let buttons = document.querySelectorAll("button")
let ScreenValue = " ";
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttontext = e.target.innerText;
        console.log("button text is", buttontext);
        if (buttontext == "X") {
            buttontext = "*";
            ScreenValue += buttontext;
            screen.value = ScreenValue;
        }
        else if (buttontext == 'C') {
            ScreenValue = '';
            screen.value = ScreenValue;
        }
        else if (buttontext == '=') {
            screen.value = eval(ScreenValue);
        }
        else if (buttontext == 'Sin') {
            ScreenValue = Math.sin(screen.value)
            screen.value = ScreenValue;
        }
        else if (buttontext == 'Cos') {
            ScreenValue = Math.cos(screen.value)
            screen.value = ScreenValue;
        }
        else if (buttontext == 'Tan') {
            ScreenValue = Math.tan(screen.value)
            screen.value = ScreenValue;
        }
        else if (buttontext == 'x2') {
            ScreenValue = Math.pow(screen.value, 2)
            screen.value = ScreenValue;
        }
        else if (buttontext == 'x3') {
            ScreenValue = Math.pow(screen.value, 3)
            screen.value = ScreenValue;
        }
        else if (buttontext == '√') {
            ScreenValue = Math.pow(screen.value, 1 / 2)
            screen.value = ScreenValue;
        }
        else if (buttontext == '∛') {
            ScreenValue = Math.pow(screen.value, 1 / 3)
            screen.value = ScreenValue;
        }
        else if (buttontext == "%") {
            ScreenValue = screen.value * 100;
            screen.value = Screenvalue;
        }
        else if (buttontext == "x!") {
            var i, num, f;
            f = 1
            num = screen.value;
            for (i = 1; i <= num; i++) {
                f = f * i;
            }

            i = i - 1;

            screen.value = f;
            ScreenValue = screen.value;
        }
        else if (buttontext == "CE") {
            ScreenValue = screen.value.substr(0, screen.value.length - 1);
            screen.value = ScreenValue;
        }
        else if(buttontext == 'log'){
            ScreenValue = Math.log(screen.value);
            screen.value = ScreenValue
        }
        else {
            ScreenValue += buttontext;
            screen.value = ScreenValue;
        }
    })
}


