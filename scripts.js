const produtos = [
  {
    titulo: "McLaren Roxa",
    descricao: "A lendária McLaren roxa com portas que abrem para cima. Luxo e desempenho juntos.",
    imagem: "img/Mclarem.png"
  },
  {
    titulo: "Lamborghini Amarela",
    descricao: "Um clássico italiano com motor V12 e presença inconfundível.",
    imagem: "img/Mclarem.png"
  },
  {
    titulo: "Bugatti Azul",
    descricao: "Velocidade e elegância. O carro mais rápido do mundo, agora na sua tela.",
    imagem: "img/Mclarem.png"
  }
];

let indexAtual = 0;

function atualizarProduto() {
  const card = document.getElementById("card");
  card.style.opacity = 0;

  setTimeout(() => {
    document.getElementById("car-title").textContent = produtos[indexAtual].titulo;
    document.getElementById("car-desc").textContent = produtos[indexAtual].descricao;
    document.getElementById("car-img").src = produtos[indexAtual].imagem;
    card.style.opacity = 1;
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