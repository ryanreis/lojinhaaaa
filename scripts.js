const produtos = [
  {
    titulo: "McLaren Roxa",
    descricao: "A lendária McLaren com portas que abrem para cima. Luxo e velocidade.",
    imagem: "img/Mclarem.png",
    corTema: "#b700ff",
    alt: "Imagem da McLaren Roxa"
  },
  {
    titulo: "Ferrari Vermelha",
    descricao: "Ferrari vermelha furiosa. Um símbolo de paixão e potência.",
    imagem: "img/ferrari.png",
    corTema: "#ff2d2d",
    alt: "Imagem da Ferrari Vermelha"
  },
  {
    titulo: "Dodge Amarelo",
    descricao: "Dodge amarelo elétrico! Estilo bruto com muita presença.",
    imagem: "img/dodge.png",
    corTema: "#ffcc00",
    alt: "Imagem do Dodge Amarelo"
  }
];

let indexAtual = 0;

function atualizarProduto() {
  const card = document.getElementById("card");
  const img = document.getElementById("car-img");
  const titulo = document.getElementById("car-title");
  const desc = document.getElementById("car-desc");

  // Animação de saída
  card.classList.add("fade-out");

  setTimeout(() => {
    // Atualiza conteúdo
    titulo.textContent = produtos[indexAtual].titulo;
    desc.textContent = produtos[indexAtual].descricao;
    img.src = produtos[indexAtual].imagem;
    img.alt = produtos[indexAtual].alt;

    // Força a animação a reiniciar
    img.style.animation = "none";
    void img.offsetWidth;
    img.style.animation = "carroFadeIn 0.6s ease";

    // Atualiza cor do tema dinamicamente
    document.documentElement.style.setProperty(
      "--cor-tema",
      produtos[indexAtual].corTema
    );

    // Animação de entrada
    card.classList.remove("fade-out");
    card.classList.add("fade-in");

    setTimeout(() => {
      card.classList.remove("fade-in");
    }, 300);
  }, 300);
}

function avancar() {
  indexAtual = (indexAtual + 1) % produtos.length;
  atualizarProduto();
}

function voltar() {
  indexAtual = (indexAtual - 1 + produtos.length) % produtos.length;
  atualizarProduto();
}

// Inicializa com o primeiro produto
window.onload = atualizarProduto;