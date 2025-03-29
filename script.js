document.addEventListener("DOMContentLoaded", function () {
    const estados = ["Focos", "Área de Calor", "Riscos"];
    const cores = ["#4CAF50", "#FF9800", "#D32F2F"];
    let index = 0;

    // Selecionando os elementos do slider
    const sliderThumb = document.querySelector(".slider-thumb");
    const slider = document.querySelector(".slider");

    function atualizarEstado() {
        sliderThumb.style.transform = `translateX(${index * 35}px)`; // Move o botão
        slider.style.backgroundColor = cores[index]; // Muda a cor do slider
    }

    slider.addEventListener("click", function () {
        index = (index + 1) % estados.length;
        atualizarEstado();
    });

    // Inicializa o estado do slider
    atualizarEstado();
});
