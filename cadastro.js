function Produto(nome, marca, preco) {
    this.nome = nome;
    this.marca = marca;
    this.preco = preco;

}

const produto1 = new Produto("Iphone", "Apple", 5000);
const produto2 = new Produto("S23", "Samsung", 4000);
const produto3 = new Produto("E22", "Motorola", 2500);

console.log(produto1);
console.log(produto2);
console.log(produto3);

console.log(produto1 instanceof Produto)
console.log(produto2 instanceof Produto)
console.log(produto3 instanceof Produto)
