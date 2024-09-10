function pesquisar() {
  // Função principal para realizar a busca de filmes na API OMDb.
  // Captura o termo de pesquisa, realiza a requisição à API e exibe os resultados.

  const campoPesquisa = document.getElementById('campo-pesquisa').value;
  // Obtém o termo de pesquisa digitado pelo usuário no campo com ID 'campo-pesquisa'.

  const resultados = document.getElementById('resultados-pesquisa');
  // Obtém o elemento HTML onde os resultados da pesquisa serão exibidos.

  if (!campoPesquisa) {
    // Verifica se o usuário digitou algum termo de pesquisa.
    resultados.innerHTML = '<p>Nada foi encontrado. Você não buscou por um filme.</p>';
    return; // Interrompe a função se nenhum termo foi digitado.
  }

  const apiUrl = `http://www.omdbapi.com/?apikey=cc1b8e8d&s=${campoPesquisa}`;
  // Constrói a URL da API OMDb, incluindo a chave de API e o termo de pesquisa.

  fetch(apiUrl)
    .then(response => response.json())
    // Converte a resposta da API para formato JSON.
    .then(data => {
      if (data.Response === 'True') {
        // Verifica se a pesquisa foi bem-sucedida.
        let html = '';
        data.Search.forEach(filme => {
          html += `
            <div class="item-resultado">
              <h2>${filme.Title}</h2>
              <img src="${filme.Poster}" alt="${filme.Title}">
              <p>Ano: ${filme.Year}</p>
              ${filme.Ratings ? `<p>Classificação: ${filme.Ratings[0].Value}</p>` : '<p>Classificação não informada</p>'}
              <a href="https://www.imdb.com/title/${filme.imdbID}" target="_blank">Ver no IMDb</a>
              </div>
          `;
        });
        resultados.innerHTML = html; // Exibe os resultados na página.
      } else {
        resultados.innerHTML = '<p>Nenhum filme encontrado.</p>';
      }
    })
    .catch(error => {
      // Captura e trata erros que possam ocorrer durante a requisição.
      console.error('Erro ao buscar filmes:', error);
      resultados.innerHTML = '<p>Ocorreu um erro ao realizar a pesquisa. Tente novamente mais tarde.</p>';
    });
}