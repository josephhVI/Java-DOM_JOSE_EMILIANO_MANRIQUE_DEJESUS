
document.getElementById("btnTamaño").addEventListener("click", function() {
    document.getElementById("textoGrande").style.fontSize = "40px";
});

document.getElementById("btnNormal").addEventListener("click", function() {
    document.getElementById("textoGrande").style.fontSize = "20px";
});

document.getElementById("btnImagen").addEventListener("click", function() {
    const imagen = document.getElementById("miImagen");

    if (imagen.src.includes("img/utbb.jpg")) {
        imagen.src = "img/caption.jpg";
    } else {
        imagen.src = "img/utbb.jpg";
    }
});


let numeroClicks = 0;

document.getElementById("btnContar").addEventListener("click", function() {
    numeroClicks++;
    document.getElementById("contador").textContent =
        "Clicks: " + numeroClicks;
});

document.getElementById("btnReiniciar").addEventListener("click", function() {
    numeroClicks = 0;
    document.getElementById("contador").textContent = "Clicks: 0";
});


document.getElementById("btnMostrar").addEventListener("click", function() {
    const mensaje = document.getElementById("mensajeOculto");

    if (mensaje.style.display === "none") {
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
    }
});

document.getElementById("btnBorde").addEventListener("click", function() {
    const caja = document.getElementById("caja");

    if (caja.style.border) {
        caja.style.border = "";
    } else {
        caja.style.border = "5px solid black";
    }
});