document.addEventListener("DOMContentLoaded", function () {
    const estados = ["Focos", "Área de Calor", "Riscos"];
    const cores = ["#4CAF50", "#FF9800", "#D32F2F"];
    let index = 0;

    // Botão de alternância
    const toggleBtn = document.getElementById("toggle-btn");
    const sliderThumb = document.querySelector(".slider-thumb");
    const slider = document.querySelector(".slider");

    function atualizarEstado() {
        toggleBtn.textContent = estados[index]; // Atualiza o texto do botão
        toggleBtn.className = ""; // Remove classes anteriores
        toggleBtn.classList.add(estados[index].toLowerCase().replace(/\s/g, "-")); // Adiciona nova classe
        sliderThumb.style.transform = `translateX(${index * 30}px)`; // Muda posição do slider
        sliderThumb.style.backgroundColor = cores[index]; // Muda cor do indicador
    }

    toggleBtn.addEventListener("click", function () {
        index = (index + 1) % estados.length;
        atualizarEstado();
    });

    slider.addEventListener("click", function () {
        index = (index + 1) % estados.length;
        atualizarEstado();
    });

    // Inicializa com o primeiro estado
    atualizarEstado();
});
