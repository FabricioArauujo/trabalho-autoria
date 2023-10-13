document.addEventListener("DOMContentLoaded", function() {/*Aqui fiz um jabaScript para que passe o carrossel de imagens onde ela se repete ao chegar no fim*/
  const carrossel = document.getElementById("carrosselJogos");
  const imagens = carrossel.querySelectorAll("#img img");
  let idx = 0;

  function mostrarProximaImagem() {
    imagens[idx].style.display = "none";
    idx = (idx + 1) % imagens.length;
    imagens[idx].style.display = "block";
  }

  // Definir todas as imagens como display: none inicialmente
  for (let i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }

  function iniciarCarrossel() {
    setInterval(mostrarProximaImagem, 3000); // Avança para a próxima imagem a cada 3 segundos (3000 milissegundos)
  }

  iniciarCarrossel();
});
        // Adicionei um evento de clique ao elemento #iconeBaixar
        document.getElementById('pc').addEventListener('click', function() {
          // Obtém a referência à lista #tiposDownload
          var pc = document.getElementById('pc');
          
          // Verifica se a lista está visível
          if (tiposDownload.style.display === 'none') {
            // Se estiver oculta, torna-a visível
            tiposDownload.style.display = 'block';
          } else {
            // Caso contrário, oculta a lista novamente
            tiposDownload.style.display = 'none';
          }
        });