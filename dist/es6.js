"use strict";

var alunos = [{
  nome: 'Breno',
  nota: 10
}, {
  nome: 'Patrícia',
  nota: 9
}, {
  nome: 'Luísa',
  nota: 6
}, {
  nome: 'Chrystian',
  nota: 5
}, {
  nome: 'Amauri',
  nota: 5
}];
var alunosAprovados = alunos.filter(function (item) {
  return item.nota >= 6;
});
console.log(alunosAprovados);