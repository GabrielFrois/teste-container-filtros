document.addEventListener("DOMContentLoaded", function () {
    const estados = ["Focos", "Área de Calor", "Riscos"];
    const cores = ["#4CAF50", "#FF9800", "#D32F2F"];
    let index = 0;

    // Selecionando os elementos do slider
    const sliderThumb = document.querySelector(".slider-thumb");
    const slider = document.querySelector(".slider");

    function atualizarEstado() {
        // Atualiza o data-stage com base no índice
        slider.setAttribute("data-stage", index); // Atualiza o data-stage do slider
        
        // Muda a cor do slider
        slider.style.backgroundColor = cores[index];
        
        // Garantir que o thumb não ultrapasse os limites do slider
        const posicaoMaxima = 200; // O máximo que o thumb pode se mover (300px - 100px)
        const novaPosicao = index * 100; // Calcula a posição
        sliderThumb.style.transform = `translateX(${Math.min(novaPosicao, posicaoMaxima)}px)`; // Garante que o thumb não ultrapasse a posição máxima
    }

    slider.addEventListener("click", function () {
        index = (index + 1) % estados.length;
        atualizarEstado();
    });

    // Inicializa o estado do slider
    atualizarEstado();
});
