const produtos = [
  {
    titulo: "McLaren Roxa",
    descricao: "A lendária McLaren com portas que abrem para cima. Luxo e velocidade.",
    imagem: "img/Mclarem.png",
    corTema: "#b700ff",
  },
  {
    titulo: "Ferrari Vermelha",
    descricao: "Ferrari vermelha furiosa. Um símbolo de paixão e potência.",
    imagem: "img/ferrari.png",
    corTema: "#ff2d2d",
  },
  {
    titulo: "Dodge Amarelo",
    descricao: "Dodge amarelo elétrico! Estilo bruto com muita presença.",
    imagem: "img/dodge.png",
    corTema: "#ffcc00",
  },
];

const traducoes = {
  pt: {
    titulo: ["McLaren Roxa", "Ferrari Vermelha", "Dodge Amarelo"],
    descricao: [
      "A lendária McLaren com portas que abrem para cima. Luxo e velocidade.",
      "Ferrari vermelha furiosa. Um símbolo de paixão e potência.",
      "Dodge amarelo elétrico! Estilo bruto com muita presença.",
    ],
    headerTitulo: "Lojinha de Carros",
    footer: "© 2025 Lojinha de Carros. Todos os direitos reservados.",
  },
  nl: {
    titulo: ["Paarse McLaren", "Rode Ferrari", "Gele Dodge"],
    descricao: [
      "De legendarische McLaren met omhoog openslaande deuren. Luxe en snelheid.",
      "Felle rode Ferrari. Een symbool van passie en kracht.",
      "Gele Dodge! Stoere stijl met veel presence.",
    ],
    headerTitulo: "Auto Winkel",
    footer: "© 2025 Auto Winkel. Alle rechten voorbehouden.",
  },
};

let indexAtual = 0;
let idiomaAtual = "pt";

function atualizarProduto() {
  const card = document.getElementById("card");
  const img = document.getElementById("car-img");
  const titulo = document.getElementById("car-title");
  const desc = document.getElementById("car-desc");
  const headerTitulo = document.querySelector("header h1");
  const footerTexto = document.querySelector("footer p");
  const container = document.querySelector(".container");

  card.classList.add("fade-out");

  setTimeout(() => {
    titulo.textContent = traducoes[idiomaAtual].titulo[indexAtual];
    desc.textContent = traducoes[idiomaAtual].descricao[indexAtual];
    img.src = produtos[indexAtual].imagem;
    img.alt = traducoes[idiomaAtual].titulo[indexAtual];

    headerTitulo.textContent = traducoes[idiomaAtual].headerTitulo;
    footerTexto.textContent = traducoes[idiomaAtual].footer;

    img.style.animation = "none";
    void img.offsetWidth;
    img.style.animation = "carroFadeIn 0.6s ease";

    document.documentElement.style.setProperty(
      "--cor-tema",
      produtos[indexAtual].corTema
    );

    card.classList.remove("fade-out");
    card.classList.add("fade-in");

    if (container.classList.contains("preload")) {
      container.classList.remove("preload");
    }

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

// Troca de idioma via botões
document.getElementById("lang-switcher").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const novoIdioma = e.target.getAttribute("data-lang");
    if (novoIdioma !== idiomaAtual) {
      idiomaAtual = novoIdioma;
      indexAtual = 0; // Reset no carro ao trocar idioma
      atualizarProduto();

      // Atualiza estilo ativo nos botões
      document.querySelectorAll("#lang-switcher button").forEach((btn) => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === idiomaAtual);
      });
    }
  }
});

// Inicializa o site
window.onload = atualizarProduto;