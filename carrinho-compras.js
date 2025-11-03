//Simulador de Caixa Eletrônico

const carrinhoCompras = (...produtos) => {
  let listProdutos = ["camisa", "calça", "sapato", "meia", "Bota"];
  let preco = [10, 20, 30, 10, 20];
  let carrinho = [];
  let valorTotal = 0;
  let clientVip = false;
  let desconto = 0.15;

  for (let i in listProdutos) {
    if (produtos.includes(listProdutos[i])) {
      let compras = { nome: listProdutos[i], preco: preco[i] };
      carrinho.push(compras);
    }
  }

  for (let item of carrinho) {
    valorTotal += item.preco;
    console.log(`${item.nome} - R$${item.preco}`);
  }

  if (clientVip) {
    let valorFinal = valorTotal - valorTotal * desconto;
    console.log(
      `O valor final com desconto de ${
        desconto * 100
      }% é R$${valorFinal.toFixed(2)}`
    );
  } else {
    console.log(`O valor final fica em R$${valorTotal.toFixed(2)}`);
  }
};

carrinhoCompras("camisa", "sapato");


//--------------------- versão otimizada
/*
const carrinhoCompras = (...produtos) => {
  const catalogo = [
    { nome: "camisa", preco: 10 },
    { nome: "calça", preco: 20 },
    { nome: "sapato", preco: 30 },
    { nome: "meia", preco: 10 },
    { nome: "bota", preco: 20 },
  ];

  const clientVip = false;
  const desconto = 0.15;

  // Filtra os produtos escolhidos
  const carrinho = catalogo.filter((item) => produtos.includes(item.nome));

  // Mostra cada item e calcula o total
  let valorTotal = 0;
  carrinho.forEach((item) => {
    console.log(`${item.nome} - R$${item.preco}`);
    valorTotal += item.preco;
  });

  // Aplica desconto se VIP
  const valorFinal = clientVip ? valorTotal * (1 - desconto) : valorTotal;
  const msgDesconto = clientVip ? ` com desconto de ${desconto * 100}%` : "";
  console.log(`O valor final${msgDesconto} é R$${valorFinal.toFixed(2)}`);
};

carrinhoCompras("camisa", "sapato");
*/