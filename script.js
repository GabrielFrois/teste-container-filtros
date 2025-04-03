document.addEventListener("DOMContentLoaded", function () {
    const estados = ["Focos", "Área de Calor", "Riscos"];
    const cores = ["#4CAF50", "#FF9800", "#D32F2F"];
    let index = 0;

    // Selecionando os elementos do slider e da interface
    const sliderThumb = document.querySelector(".slider-thumb");
    const slider = document.querySelector(".slider");
    const filtroContainer = document.querySelector(".filtro-container");
    const botaoMapa = document.querySelector(".aba.ativa"); // Mapa
    const botaoGrafico = document.querySelector(".aba:nth-child(2)"); // Gráfico

    // Função para atualizar o estado do slider
    function atualizarEstado() {
        slider.setAttribute("data-stage", index); // Atualiza o data-stage do slider
        slider.style.backgroundColor = cores[index]; // Muda a cor do slider
        const posicaoMaxima = 200; // O máximo que o thumb pode se mover (300px - 100px)
        const novaPosicao = index * 100; // Calcula a posição
        sliderThumb.style.transform = `translateX(${Math.min(novaPosicao, posicaoMaxima)}px)`; // Garante que o thumb não ultrapasse a posição máxima
    }

    // Atualiza o estado ao clicar no slider
    slider.addEventListener("click", function () {
        index = (index + 1) % estados.length;
        atualizarEstado();
    });

    // Inicializa o estado do slider
    atualizarEstado();

    // Função para gerar o conteúdo original do filtro
    function gerarConteudoOriginal() {
        return `
            <div class="filtros">
                <!-- Opções de estado -->
                <div class="toggle-labels">
                    <span>Focos</span>
                    <span>Área de Calor</span>
                    <span>Riscos</span>
                </div>

                <!-- Slider -->
                <div class="slider-container">
                    <div class="slider">
                        <div class="slider-thumb"></div>
                    </div>
                </div>

                <label for="estado">Estados</label>
                <select id="estado" name="estado">
                    <option value="">Selecione um estado</option>
                    <option value="ac">Acre</option>
                    <option value="al">Alagoas</option>
                    <option value="ap">Amapá</option>
                    <option value="am">Amazonas</option>
                    <option value="ba">Bahia</option>
                    <option value="ce">Ceará</option>
                    <option value="df">Distrito Federal</option>
                    <option value="es">Espírito Santo</option>
                    <option value="go">Goiás</option>
                    <option value="ma">Maranhão</option>
                    <option value="mt">Mato Grosso</option>
                    <option value="ms">Mato Grosso do Sul</option>
                    <option value="mg">Minas Gerais</option>
                    <option value="pa">Pará</option>
                    <option value="pb">Paraíba</option>
                    <option value="pr">Paraná</option>
                    <option value="pe">Pernambuco</option>
                    <option value="pi">Piauí</option>
                    <option value="rj">Rio de Janeiro</option>
                    <option value="rn">Rio Grande do Norte</option>
                    <option value="rs">Rio Grande do Sul</option>
                    <option value="ro">Rondônia</option>
                    <option value="rr">Roraima</option>
                    <option value="sc">Santa Catarina</option>
                    <option value="sp">São Paulo</option>
                    <option value="se">Sergipe</option>
                    <option value="to">Tocantins</option>
                </select>

                <label for="bioma">Biomas</label>
                <select id="bioma" name="bioma">
                    <option value="">Selecione um bioma</option>
                    <option value="amazonia">Amazônia</option>
                    <option value="caatinga">Caatinga</option>
                    <option value="cerrado">Cerrado</option>
                    <option value="mata-atlantica">Mata Atlântica</option>
                    <option value="pantanal">Pantanal</option>
                    <option value="pampa">Pampa</option>
                </select>

                <div class="datas">
                    <label>Datas:</label>
                    <div class="input-group">
                        <div>
                            <label for="inicio">Início:</label>
                            <input type="date" id="inicio" name="inicio" class="campo-data">
                        </div>
                        <div>
                            <label for="fim">Fim:</label>
                            <input type="date" id="fim" name="fim" class="campo-data">
                        </div>
                    </div>
                </div>

                <button class="btn-aplicar">Aplicar</button>
            </div>
        `;
    }

    // Função para alterar o conteúdo do filtro-container com base no botão
    function alterarConteudo(tipo) {
        if (tipo === "mapa") {
            filtroContainer.innerHTML = gerarConteudoOriginal(); // Recarrega o conteúdo original
            atualizarEstado(); // Atualiza o slider para o estado atual
        } else if (tipo === "grafico") {
            filtroContainer.innerHTML = `<h2>Disponível na próxima atualização</h2>`;
        }
    }

    // Evento para o botão "Mapa"
    botaoMapa.addEventListener("click", function () {
        botaoMapa.classList.add("ativa");
        botaoGrafico.classList.remove("ativa");
        alterarConteudo("mapa"); // Mantém o estado do slider
    });

    // Evento para o botão "Gráfico"
    botaoGrafico.addEventListener("click", function () {
        botaoGrafico.classList.add("ativa");
        botaoMapa.classList.remove("ativa");
        alterarConteudo("grafico"); // Exibe a mensagem de "próxima atualização"
    });
});
