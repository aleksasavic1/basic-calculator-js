let res = document.querySelector("#result");


let num0 = document.querySelector("#zero");
let num1 = document.querySelector("#one");
let num2 = document.querySelector("#two");
let num3 = document.querySelector("#three");
let num4 = document.querySelector("#four");
let num5 = document.querySelector("#five");
let num6 = document.querySelector("#six");
let num7 = document.querySelector("#seven");
let num8 = document.querySelector("#eight");
let num9 = document.querySelector("#nine");


num0.addEventListener('click', () => {
    if(res.innerText === "0") {
        return;
    } else {
        res.innerText += "0";
    }
});
num1.addEventListener('click', () => {
    if(res.innerText === "0") {
        res.innerText = "1";
    } else {
        res.innerText += "1";
    }
});
num2.addEventListener('click', () => {
    if(res.innerText === "0") {
        res.innerText = "2";
    } else {
        res.innerText += "2";
    }
});
num3.addEventListener('click', () => {
    if(res.innerText === "0") {
        res.innerText = "3";
    } else {
        res.innerText += "3";
    }
});
num4.addEventListener('click', () => {
    if(res.innerText === "0") {
        res.innerText = "4";
    } else {
        res.innerText += "4";
    }
});
num5.addEventListener('click', () => {
    if(res.innerText === "0") {
        res.innerText = "5";
    } else {
        res.innerText += "5";
    }
});
num6.addEventListener('click', () => {
    if(res.innerText === "0") {
        res.innerText = "6";
    } else {
        res.innerText += "6";
    }
});
num7.addEventListener('click', () => {
    if(res.innerText === "0") {
        res.innerText = "7";
    } else {
        res.innerText += "7";
    }
});
num8.addEventListener('click', () => {
    if(res.innerText === "0") {
        res.innerText = "8";
    } else {
        res.innerText += "8";
    }
});
num9.addEventListener('click', () => {
    if(res.innerText === "0") {
        res.innerText = "9";
    } else {
        res.innerText += "9";
    }
});


let allClear = document.querySelector("#AC");

allClear.addEventListener("click", () => {
    res.innerText = "0";
});


let clear = document.querySelector("#C");
clear.addEventListener("click", () => {
    if(res.innerText === "0") {
        return;
    } else if(res.innerText === "Error") {
        res.innerText = "0";
    } else {
        let current = res.innerText;
        let new_ = current.slice(0, -1);
        res.innerText = new_;
        
        if(res.innerText === "") {
            res.innerText = "0";
        }
    }
});


let dot = document.querySelector("#dot");
dot.addEventListener("click", () => {
    res.innerText += ".";
});

let sum = document.querySelector("#sum");
sum.addEventListener("click", () => {
    res.innerText += "+";
});

let sub = document.querySelector("#sub");
sub.addEventListener("click", () => {
    res.innerText += "-";
});

let mul = document.querySelector("#mul");
mul.addEventListener("click", () => {
    res.innerText += "*";
});

let div = document.querySelector("#div");
div.addEventListener("click", () => {
    res.innerText += "/";
});




let equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    try {
        if(res.innerText === "Error") {
            res.innerText = "Error";
        } else {
            res.innerText = eval(res.innerText);
        }
    } catch {
        res.innerText = "Error";
    }
});