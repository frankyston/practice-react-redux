const produto = {
    name: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(obj){
    return { ...obj }
}

const novoProduto = clone(produto)
novoProduto.name = "Caneta Bic Azul"

console.log(produto, novoProduto)