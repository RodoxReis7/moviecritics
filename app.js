function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');
    console.log(section); // Loga a seção no console para verificação

    // Inicializa a string que armazenará os resultados
    let resultados = '';

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
       // Cria um título com um link para o detalhe
        resultados += `<div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}
            </p>
            <a href="${dado.link}" target="_blank"> Veja a crítica completa!</a>
        </div>`;
    }

    // Atribui os resultados à seção HTML
    section.innerHTML = resultados;
}