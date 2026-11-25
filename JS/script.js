
// ==========================
// CATÁLOGO DE CAFÉS
// ==========================

const cafes = [
    {
        nome: "Espresso",
        descricao: "Café intenso, encorpado e com aroma marcante.",
        preco: 6.00,
        imagem: "espresso.jpg"
    },

    {
        nome: "Cappuccino",
        descricao: "Combinação equilibrada de café, leite e espuma.",
        preco: 10.00,
        imagem: "cappuccino.jpg"
    },

    {
        nome: "Café Latte",
        descricao: "Espresso suave com leite vaporizado.",
        preco: 12.00,
        imagem: "cafe-latte.jpg"
    },

{
    nome: "Mocha",
    descricao: "Uma combinação deliciosa de espresso, chocolate e leite vaporizado.",
    preco: 14.00,
    imagem: "mocha.jpg"
},
{
    nome: "Macchiato",
    descricao: "Espresso intenso com uma pequena quantidade de espuma de leite.",
    preco: 9.00,
    imagem: "macchiato.jpg"
},
{
    nome: "Flat White",
    descricao: "Espresso encorpado com leite vaporizado e textura cremosa.",
    preco: 13.00,
    imagem: "flat-white.jpg"
},
{
    nome: "Iced Coffee",
    descricao: "Café gelado, refrescante e perfeito para os dias quentes.",
    preco: 12.00,
    imagem: "iced-coffee.jpg"
},
{
    nome: "Affogato",
    descricao: "Uma sobremesa italiana que combina sorvete de creme com espresso quente.",
    preco: 15.00,
    imagem: "affogato.jpg"
},

{
    nome: "Ristretto",
    descricao: "Um espresso curto, intenso e concentrado.",
    preco: 7.00,
    imagem: "ristretto.jpg"
},
{
    nome: "Café Americano",
    descricao: "Espresso combinado com água quente, de sabor suave.",
    preco: 9.00,
    imagem: "americano.jpg"
},
{
    nome: "Café Vienense",
    descricao: "Café encorpado finalizado com uma camada de chantilly.",
    preco: 13.00,
    imagem: "vienense.jpg"
},
{
    nome: "Café Irlandês",
    descricao: "Uma combinação tradicional de café, whisky e creme.",
    preco: 18.00,
    imagem: "irlandes.jpg"
},
{
    nome: "Cold Brew",
    descricao: "Café extraído em água fria por várias horas, suave e refrescante.",
    preco: 14.00,
    imagem: "cold-brew.jpg"
},

{
    nome: "Frappuccino",
    descricao: "Bebida gelada batida com café, leite, gelo e uma textura cremosa.",
    preco: 16.00,
    imagem: "frappuccino.jpg"
},
{
    nome: "Caramel Macchiato",
    descricao: "Espresso com leite vaporizado, baunilha e calda de caramelo.",
    preco: 15.00,
    imagem: "caramel-macchiato.jpg"
},
{
    nome: "Café com Leite",
    descricao: "A combinação tradicional de café preparado e leite quente.",
    preco: 8.00,
    imagem: "cafe-com-leite.jpg"
},
{
    nome: "Espresso Tônica",
    descricao: "Uma mistura refrescante de espresso, água tônica e gelo.",
    preco: 14.00,
    imagem: "espresso-tonica.jpg"
},
{
    nome: "Mocha Gelado",
    descricao: "Café espresso, chocolate, leite gelado e gelo.",
    preco: 15.00,
    imagem: "mocha-gelado.jpg"
}

];


// ==========================
// RENDERIZAR CARDÁPIO
// ==========================


const categorias = {
    "Espresso": "quentes",
    "Cappuccino": "quentes",
    "Café Latte": "quentes",
    "Mocha": "quentes",
    "Macchiato": "quentes",
    "Flat White": "quentes",
    "Ristretto": "quentes",
    "Café Americano": "quentes",
    "Café Vienense": "especiais",
    "Café Irlandês": "especiais",
    "Affogato": "especiais",
    "Iced Coffee": "gelados",
    "Cold Brew": "gelados",
    "Frappuccino": "gelados",
    "Caramel Macchiato": "quentes",
    "Café com Leite": "quentes",
    "Espresso Tônica": "especiais",
    "Mocha Gelado": "gelados"
};

let categoriaSelecionada = "todos";


function carregarCafes() {

    const container = document.querySelector(".menu-container");

    container.innerHTML = "";

    cafes
        .filter(cafe =>
            categoriaSelecionada === "todos" ||
            categorias[cafe.nome] === categoriaSelecionada
        )
        .forEach(cafe => {

            const card = document.createElement("article");

            card.classList.add("cafe-card");

            card.innerHTML = `
                <img src="assets/img/${cafe.imagem}" alt="${cafe.nome}">

                <div class="cafe-info">
                    <h3>${cafe.nome}</h3>

                    <p>${cafe.descricao}</p>

                    <span>R$ ${cafe.preco.toFixed(2).replace(".", ",")}</span>
                </div>
            `;

            container.appendChild(card);

        });
}


// ==========================
// INICIAR FILTROS
// ==========================

const botoesFiltro = document.querySelectorAll(".filtro");

botoesFiltro.forEach(botao => {

    botao.addEventListener("click", () => {

        categoriaSelecionada = botao.dataset.categoria;

        botoesFiltro.forEach(item => {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        carregarCafes();

    });

});


// ==========================
// INICIAR
// ==========================

carregarCafes();


// ==========================
// INICIAR
// ==========================




