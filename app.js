function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');
    
    let campoPesquisa = document.getElementById('campo-pesquisa').value;

    //Se campoPesquisa, for uma string sem nada
    if (!campoPesquisa){
        section.innerHTML = '<p>Nada foi encontrado. Você não buscou por um filme.</p>';
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa a string que armazenará os resultados
    let resultados = '';
    let titulo = '';
    let descricao = '';
    let tags = '';

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
       // Cria um novo elemento
        resultados += `<div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}
            </p>
            <a href="${dado.link}" target="_blank"> Veja a crítica completa!</a>
        </div>`;
        }
    }

    if (!resultados ) {
        resultados = '<p>Nada foi encontrado</p>';
    }

    // Atribui os resultados à seção HTML
    section.innerHTML = resultados;
}