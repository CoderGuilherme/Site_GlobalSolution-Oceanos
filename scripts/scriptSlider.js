document.addEventListener("DOMContentLoaded", () => {
    // Dicionário de imagens e palavras
    const dictionary = {
        "SOLUÇÃO": ["image/prototipo.jpg","O dispositivo de IoT projetado para embarcações filtra microplásticos e nanoplásticos enquanto captura plásticos maiores. Além disso, ele coleta e armazena dados para monitorar a qualidade da água durante a navegação."],
        "Filtro": ["image/filtro.jpeg", "O filtro é a primeira etapa do funil. <br> Ele utiliza uma tecnologia eletromagnética por meio de uma mistura de pó de magnetita e óleo vegetal para atrair os microplásticos."],
        "Visor": ["image/visor.jpg", "O visor é a parte intermediária do funil. Ele permite visualizar os dados filtrados de forma mais detalhada, mantendo um histórico dos locais com maiores índices de microplásticos e resíduos coletados."],
        "Sensor": ["image/sensor.jpeg", "O sensor é a etapa do funil que serve como coleta de dados e monitoramento. Ele monitora continuamente os dados e detecta mudanças no pH da água causadas pelo acúmulo de microplásticos."],
        "Cilindro de Armazenamento": ["image/cilindro.jpeg", "O Cilindro de Armazenamento é a última etapa. Serve como depósito de todos os resíduos coletados. É possível acoplar outros tamanhos de cilindro no dispositivo."]
    };

    const words = Object.keys(dictionary);
    let currentIndex = 0;

    // Seleciona os elementos do DOM
    const imageElement = document.getElementById("image");
    const titleElement = document.getElementById("titulo");
    const textElement = document.getElementById("texto");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    // Função para atualizar a imagem e o título
    function updateContent(index) {
        const currentWord = words[index];
        const [currentImage, currentText] = dictionary[currentWord];

        // Adiciona a classe 'hidden' para iniciar a transição de desaparecimento
        imageElement.classList.add('hidden');
        titleElement.classList.add('hidden');
        textElement.classList.add('hidden');

        // Espera o tempo da transição para atualizar o conteúdo
        setTimeout(() => {
            titleElement.textContent = currentWord;
            imageElement.src = currentImage;
            imageElement.alt = currentWord;
            textElement.innerHTML = currentText;  // Use innerHTML para preservar as tags <br>

            // Remove a classe 'hidden' para iniciar a transição de aparecimento
            imageElement.classList.remove('hidden');
            titleElement.classList.remove('hidden');
            textElement.classList.remove('hidden');
        }, 500); // Tempo correspondente à duração da transição em CSS
    }

    // Eventos dos botões
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? words.length - 1 : currentIndex - 1;
        updateContent(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex === words.length - 1) ? 0 : currentIndex + 1;
        updateContent(currentIndex);
    });

    // Inicializa o conteúdo
    updateContent(currentIndex);
});
