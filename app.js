function pesquisar() {
    const campoPesquisa = document.getElementById('campo-pesquisa').value;
    const resultados = document.getElementById('resultados-pesquisa');
  
    if (!campoPesquisa) {
      resultados.innerHTML = '<p>Nada foi encontrado. Você não buscou por um filme.</p>';
      return;
    }
  
    const apiUrl = `https://www.omdbapi.com/?apikey=cc1b8e8d&s=${campoPesquisa}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          let html = '';
          data.Search.forEach(filme => {
            html += `
              <div class="item-resultado">
                <img src="https://img.omdbapi.com/?apikey=cc1b8e8d&i=${filme.imdbID}" alt="${filme.Title}">
                <h2>${filme.Title} (${filme.Year})</h2>
                ${filme.Ratings ? `<p>Classificação: ${filme.Ratings[0].Value}</p>` : '<p>Classificação não informada</p>'}
                <a href="https://www.imdb.com/title/${filme.imdbID}" target="_blank">Ver no IMDb</a>
              </div>

            `;
          });
          resultados.innerHTML = html;
        } else {
          resultados.innerHTML = '<p>Nenhum filme encontrado.</p>';
        }
      })
      .catch(error => {
        console.error('Erro ao buscar filmes:', error);
        resultados.innerHTML = '<p>Ocorreu um erro ao realizar a pesquisa. Tente novamente mais tarde.</p>';
      });
  }