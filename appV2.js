function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById('resultados-pesquisa');

  // Obtém o valor digitado no campo de pesquisa e converte para minúsculas para facilitar a comparação
  let campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();

  // Verifica se o usuário digitou algum termo de pesquisa
  if (!campoPesquisa) {
    // Se não digitou nada, exibe uma mensagem informando que não há resultados
    section.innerHTML = '<p>Nada foi encontrado. Você não buscou por um filme.</p>';
    return; // Interrompe a função, pois não há mais o que ser feito
  }

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = '';

  // Itera sobre cada item (filme) na lista de dados
  for (let dado of dados) {
    // Converte o título, descrição e tags do filme para minúsculas para facilitar a comparação
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let tags = dado.tags.toLowerCase();

    // Verifica se o termo de pesquisa está presente no título, descrição ou tags do filme
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Se o filme corresponder à pesquisa, cria um novo elemento HTML para exibir o resultado
      resultados += `<div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank"> Veja a crítica completa!</a>
      </div>`;
    }
  }

  // Verifica se foram encontrados resultados
  if (!resultados) {
    // Se não encontrou nenhum resultado, exibe uma mensagem informando
    resultados = '<p>Nada foi encontrado</p>';
  }

  // Atualiza o conteúdo da seção de resultados com os resultados encontrados (ou mensagem de não encontrado)
  section.innerHTML = resultados;
}