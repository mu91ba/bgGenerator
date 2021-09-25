const css = document.querySelector("h3");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const body = document.getElementById("gradient");
const random = document.querySelector(".random");

function bodyGradient(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    css.textContent = `${body.style.background}`;
}

bodyGradient();

color1.addEventListener("input", bodyGradient)
color2.addEventListener("input", bodyGradient)


function changeColor(){
    body.style.background = `linear-gradient(to right, ${randomGradient()}, ${randomGradient()})`;
}

function randomGradient() {
    const pick = "0123456789abcdef";
    let output = "#";
    while ( output.length < 7){
        output += pick[Math.floor(Math.random() * pick.length)];
        css.textContent = `${body.style.background}`;
    }
    return output;
}

random.addEventListener("click", changeColor);




// #Alternative:
// Instead of adding '.addEventListner' which is a recommended way, we can also do "[onclick = bodyGradient()] or [oninput = bodyGradient()]" which would also work fine.