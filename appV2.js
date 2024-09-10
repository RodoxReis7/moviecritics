function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');
  
    // Obtém o termo de pesquisa digitado pelo usuário e converte para minúsculas para facilitar a comparação.
    let campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();
  
    // Verifica se o usuário digitou algum termo de pesquisa.
    if (!campoPesquisa) {
      // Exibe uma mensagem informando que nenhum termo foi digitado.
      section.innerHTML = '<p>Nada foi encontrado. Você não buscou por um filme.</p>';
      return; // Interrompe a função.
    }
  
    // Inicializa uma string para armazenar os resultados da pesquisa.
    let resultados = '';
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos).
    for (let dado of dados) {
      // Converte os campos 'titulo', 'descricao' e 'tags' para minúsculas para facilitar a comparação.
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente no título, descrição ou tags do dado.
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento HTML para exibir o resultado da pesquisa.
        resultados += `<div class="item-resultado">
          </div>`;
      }
    }
  
    // Verifica se foram encontrados resultados.
    if (!resultados) {
      // Se não houver resultados, exibe uma mensagem informando.
      resultados = '<p>Nada foi encontrado</p>';
    }
  
    // Atribui os resultados à seção HTML.
    section.innerHTML = resultados;
  }