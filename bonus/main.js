// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...


let lampImgEl = document.querySelector(".lamp-img");
let btnLampEl = document.getElementById("btn-lamp");

btnLampEl.addEventListener('click', () => {
    if(btnLampEl.classList.contains("on")){
        // Spegni la lampadina
        btnLampEl.classList.remove("on");
        btnLampEl.innerText = "Accendi";
        lampImgEl.src = "./img/white_lamp.png";
    } 
    else {
        // Accendi la lampadina
        btnLampEl.classList.add("on");
        btnLampEl.innerText = "Spegni";
        lampImgEl.src = "./img/yellow_lamp.png";
    }
});
