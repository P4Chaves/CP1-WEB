// BOTAO SALVAR
// Primeiro, selecione o botão e o coração no DOM usando querySelector
let botaoSalvar = document.querySelector('.salvar-btn');
let coracao = document.querySelector('.coracao');

// Em seguida, adicione um ouvinte de evento 'click' ao botão
botaoSalvar.addEventListener('click', function(event) {
    // Isso impede que a página seja recarregada (comportamento padrão do link)
    event.preventDefault();

    // Verifique se a chave 'hospedagem' já existe no localStorage
    if (localStorage.getItem('hospedagem')) {
        // Se já existir, remova do localStorage e atualize o texto e a cor do coração
        localStorage.removeItem('hospedagem');
        botaoSalvar.textContent = 'Salvar';
        coracao.style.stroke = 'currentColor';
        coracao.style.fill = 'none';
    } else {
        // Se não existir, adicione no localStorage e atualize o texto e a cor do coração
        localStorage.setItem('hospedagem', 'Propriedade única praia particular - Excepcional');
        botaoSalvar.textContent = 'Salvo';
        coracao.style.stroke = 'red';
        coracao.style.fill = 'red';
    }
});


//Galeria
// Variável para armazenar o índice da imagem atual na galeria
let currentIndex = 0;

// Seleciona todas as imagens na galeria
const images = document.querySelectorAll('.galeria img');

// Armazena o número total de imagens na galeria
const totalImages = images.length;

// Função para abrir o lightbox quando uma imagem é clicada
function openLightbox(event) {
    // Verifica se o elemento clicado é uma imagem
    if (event.target.tagName === 'IMG') {
        // Encontra o índice da imagem clicada dentro da lista de imagens
        const clickedIndex = Array.from(images).indexOf(event.target);
        currentIndex = clickedIndex; // Atualiza o índice atual para o da imagem clicada
        updateLightboxImage(); // Atualiza a imagem no lightbox
        // Exibe o lightbox definindo o estilo de exibição como 'flex'
        document.getElementById('lightbox').style.display = 'flex';
    }
}

// Função para fechar o lightbox
function closeLightbox() {
    // Oculta o lightbox definindo o estilo de exibição como 'none'
    document.getElementById('lightbox').style.display = 'none';
}

// Função para trocar a imagem no lightbox
function changeImage(direction) {
    // Incrementa ou decrementa o índice da imagem atual de acordo com a direção
    currentIndex += direction;
    // Verifica se o índice ultrapassou o número total de imagens
    if (currentIndex >= totalImages) {
        currentIndex = 0; // Volta para a primeira imagem
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Vai para a última imagem
    }
    updateLightboxImage(); // Atualiza a imagem no lightbox
}

// Função para atualizar a imagem exibida no lightbox
function updateLightboxImage() {
    // Seleciona a imagem no lightbox e o contêiner de miniaturas
    const lightboxImg = document.getElementById('lightbox-img');
    const thumbnailContainer = document.getElementById('thumbnail-container');

    // Define o src da imagem no lightbox como o src da imagem atual
    lightboxImg.src = images[currentIndex].src;
    thumbnailContainer.innerHTML = ''; // Limpa o contêiner de miniaturas

    // Para cada imagem, cria uma miniatura e a adiciona ao contêiner de miniaturas
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.src; // Define o src da miniatura
        thumbnail.alt = `Thumbnail ${index + 1}`; // Define o texto alternativo da miniatura
        thumbnail.classList.add('thumbnail'); // Adiciona a classe 'thumbnail' à miniatura
        // Adiciona um ouvinte de eventos para atualizar a imagem principal ao clicar na miniatura
        thumbnail.addEventListener('click', () => updateMainImage(index));
        thumbnailContainer.appendChild(thumbnail); // Adiciona a miniatura ao contêiner
    });

    // Seleciona todas as miniaturas e adiciona a classe 'active-thumbnail' à miniatura atual
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails[currentIndex].classList.add('active-thumbnail');
}

// Função para atualizar a imagem principal quando uma miniatura é clicada
function updateMainImage(index) {
    currentIndex = index; // Atualiza o índice da imagem atual
    updateLightboxImage(); // Atualiza a imagem no lightbox
}

updateLightboxImage(); // Inicializa o lightbox com a primeira imagem

// Adiciona um ouvinte de eventos para as teclas de seta para navegar entre as imagens
document.addEventListener('keydown', function (e) {
    // Verifica se o lightbox está visível
    if (document.getElementById('lightbox').style.display === 'flex') {
        // Verifica qual tecla foi pressionada
        if (e.key === 'ArrowLeft') {
            changeImage(-1); // Vai para a imagem anterior
        } else if (e.key === 'ArrowRight') {
            changeImage(1); // Vai para a próxima imagem
        }
    }
});


// DROPDOWN
  // Primeiro, selecione o menu suspenso e o botão que o abre no DOM
let dropdownMenu = document.querySelector('#dropdown-menu');
let botaoMenu = document.querySelector('.cabecalho__usuario');

// Adicione um ouvinte de eventos 'click' ao botão do menu
botaoMenu.addEventListener('click', function(event) {
    // Isso impede que o evento de clique se propague para o document
    event.stopPropagation();

    // Alterna a classe 'active' do menu suspenso
    dropdownMenu.classList.toggle('active');
});

// Adicione um ouvinte de eventos 'click' ao menu suspenso
dropdownMenu.addEventListener('click', function(event) {
    // Isso impede que o evento de clique se propague para o document
    event.stopPropagation();
});

// Adicione um ouvinte de eventos 'click' ao document
document.addEventListener('click', function() {
    // Se o document é clicado, remove a classe 'active' do menu suspenso
    dropdownMenu.classList.remove('active');
});

// AVALIAÇÕES DINÂMICAS

const avaliacoes = [
    {
      nome: 'Matheus Farias',
      foto: 'img/matheus_farias.jpg',
      comentario: 'Provavelmente um dos melhores lugares para se hospedar em Comendador Celso Ramos.',
      estadia: '3 semanas • Ficou algumas noites',
      estrelas: 5
    },
    {
      nome: 'Vitor Pinheiro',
      foto: 'img/vitor_pinheiro.jpg',
      comentario: 'Estadia agradável com ótima localização, mas pequenos contratempos na comunicação e Wi-Fi intermitente.',
      estadia: 'janeiro de 2024 • Ficou em torno de uma semana',
      estrelas: 3.5
    },
    // etc.
  ];
  
  function renderAvaliacao(avaliacao) {
    const { nome, foto, comentario, estadia, estrelas } = avaliacao;
  
    const avaliacaoElement = document.createElement('div');
    avaliacaoElement.classList.add('locatario');
  
    const imgElement = document.createElement('img');
    imgElement.src = foto;
    imgElement.alt = nome;
    avaliacaoElement.appendChild(imgElement);
  
    const divElement = document.createElement('div');
    avaliacaoElement.appendChild(divElement);
  
    const h2Element = document.createElement('h2');
    h2Element.textContent = nome;
    divElement.appendChild(h2Element);
  
    const pAvaliacaoElement = document.createElement('p');
    pAvaliacaoElement.classList.add('avaliacao');
    divElement.appendChild(pAvaliacaoElement);
  
    const spanElement = document.createElement('span');
    for (let i = 0; i < Math.floor(estrelas); i++) {
      const ionIconElement = document.createElement('ion-icon');
      ionIconElement.name = 'star';
      spanElement.appendChild(ionIconElement);
    }
    if (estrelas % 1 !== 0) {
      const ionIconElement = document.createElement('ion-icon');
      ionIconElement.name = 'star-half';
      spanElement.appendChild(ionIconElement);
      // Adiciona uma estrela vazia
      const ionIconEmptyElement = document.createElement('ion-icon');
      ionIconEmptyElement.name = 'star-outline';
      spanElement.appendChild(ionIconEmptyElement);
    }
    pAvaliacaoElement.appendChild(spanElement);
  
    const spanTempoEstadiaElement = document.createElement('span');
    spanTempoEstadiaElement.classList.add('tempo-estadia');
    spanTempoEstadiaElement.textContent = estadia;
    pAvaliacaoElement.appendChild(spanTempoEstadiaElement);
  
    const pComentarioElement = document.createElement('p');
    pComentarioElement.classList.add('comentario');
    pComentarioElement.textContent = comentario;
    divElement.appendChild(pComentarioElement);
  
    const avaliacoesContainer = document.querySelector('#comentarios');
    avaliacoesContainer.appendChild(avaliacaoElement);
  }
  
  window.onload = function () {
    avaliacoes.forEach((avaliacao) => renderAvaliacao(avaliacao));
  };
  
  
  
  
  
  
  
  







