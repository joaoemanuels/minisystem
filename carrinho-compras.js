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
