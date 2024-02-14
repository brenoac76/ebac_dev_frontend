function Produto(nome) {
    this.nome = nome;
    this.dizMais = function() {
        console.log(this.nome + " top de linha à venda");
    }
}

function Celular(nome, marca, preco) {
    this.marca = marca;
    this.preco = preco;

    Produto.call(this, nome);

   
}

function Notebook(nome, marca, modelo, preco) {
    this.modelo = modelo;

    Celular.call(this, nome, marca, preco)
}

const Celular1 = new Celular("Iphone", "Apple", 5000);
const Produto1 = new Produto("Iphone")
const Notebook1 = new Notebook("Mac", "Apple", "MacBook-Air", 10000)
Produto1.dizMais();
Notebook1.dizMais();


console.log(Celular1);
console.log(Produto1);
console.log(Notebook1);


