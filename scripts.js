const produtos = [
  {
    titulo: {
      pt: "McLaren Roxa",
      nl: "Paarse McLaren"
    },
    descricao: {
      pt: "A lendária McLaren com portas que abrem para cima. Luxo e velocidade.",
      nl: "De legendarische McLaren met deuren die omhoog openen. Luxe en snelheid."
    },
    imagem: "img/Mclarem.png",
    corTema: "#b700ff"
  },
  {
    titulo: {
      pt: "Ferrari Vermelha",
      nl: "Rode Ferrari"
    },
    descricao: {
      pt: "Ferrari vermelha furiosa. Um símbolo de paixão e potência.",
      nl: "Felle rode Ferrari. Een symbool van passie en kracht."
    },
    imagem: "img/ferrari.png",
    corTema: "#ff2d2d"
  },
  {
    titulo: {
      pt: "Dodge Amarelo",
      nl: "Gele Dodge"
    },
    descricao: {
      pt: "Dodge amarelo elétrico! Estilo bruto com muita presença.",
      nl: "Elektrische gele Dodge! Ruwe stijl met veel aanwezigheid."
    },
    imagem: "img/dodge.png",
    corTema: "#ffcc00"
  }
];

let indexAtual = 0;
let idiomaAtual = "pt";

function atualizarProduto() {
  const container = document.querySelector(".container");
  const card = document.getElementById("card");
  const img = document.getElementById("car-img");
  const titulo = document.getElementById("car-title");
  const desc = document.getElementById("car-desc");

  // Remove preload para mostrar conteúdo
  if (container.classList.contains("preload")) {
    container.classList.remove("preload");
  }

  // Animação de saída
  card.classList.add("fade-out");

  setTimeout(() => {
    // Atualiza conteúdo conforme idioma
    titulo.textContent = produtos[indexAtual].titulo[idiomaAtual];
    desc.textContent = produtos[indexAtual].descricao[idiomaAtual];
    img.src = produtos[indexAtual].imagem;

    // Reinicia animação da imagem
    img.style.animation = "none";
    void img.offsetWidth; // hack para reiniciar animação CSS
    img.style.animation = "carroFadeIn 0.6s ease";

    // Atualiza cor do tema
    document.documentElement.style.setProperty("--cor-tema", produtos[indexAtual].corTema);

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

// Listener para troca de idioma no seletor
document.getElementById("lang-switcher").addEventListener("click", (e) => {
  let button;
  if (e.target.tagName === "BUTTON") {
    button = e.target;
  } else if (e.target.parentElement.tagName === "BUTTON") {
    button = e.target.parentElement;
  } else {
    return;
  }

  const novoIdioma = button.getAttribute("data-lang");
  if (novoIdioma !== idiomaAtual) {
    idiomaAtual = novoIdioma;
    indexAtual = 0;
    atualizarProduto();

    // Atualiza classe active nos botões
    document.querySelectorAll("#lang-switcher button").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === idiomaAtual);
    });
  }
});

// Atualiza produto ao carregar página
window.onload = atualizarProduto;