let lampImgEl = document.querySelector(".lamp-img");
let btnLampEl = document.getElementById("btn-lamp");

window.alert("Accenderla è facile, ma spegnerla non lo sarà altrettanto")

btnLampEl.addEventListener('click', () => {
    const isOn = btnLampEl.classList.toggle("on");

    if(isOn) {
        btnLampEl.innerText = "Spegni";
        lampImgEl.src = "./img/yellow_lamp.png";
    } else {
        btnLampEl.innerText = "Accendi";
        lampImgEl.src = "./img/white_lamp.png";
    }
});

function getRandomPosition() {
    const positions = [0, 50, 100];
    return positions[Math.floor(Math.random() * positions.length)];
}

btnLampEl.addEventListener('mouseenter', () => {
    console.log("hover");

    if (btnLampEl.classList.contains("on")) {
        btnLampEl.classList.remove("top-0", "top-50", "top-100", "start-0", "start-50", "start-100");

        let topVal = getRandomPosition();
        let startVal = getRandomPosition();

        btnLampEl.classList.add("position-absolute", `top-${topVal}`, `start-${startVal}`);
    }
});

