
var lista = Array()

lista[0] = 'Goleiro'
lista[1] = 'Zagueiro'
lista[2] = 'Atacante'
lista[3] = 'Meio Campo'
lista[4] = 'Reserva'

console.log(lista.sort()) //porém o método sort é especificamente para ordenação alfabética, ver exemplo abaixo



var valores = Array()

valores[0] = 1 
valores[1] = 14
valores[2] = 11
valores[3] = 3
valores[4] = 33

console.log(valores.sort()) // ou seja ele contiua organizando primeiro os números precedido pelo numero 1 '1,11,14,3,33'


var ordenados = Array()

ordenados[0] = 1 
ordenados[1] = 14
ordenados[2] = 11
ordenados[3] = 3
ordenados[4] = 33

console.log(ordenados.sort(ordenaNumeros)) //chamar a funcao como callback, ou seja sem parênteses.

//para isso é necessário declarar função que indique como os valores devem ser ordenados:

function ordenaNumeros(a,b){
    return a - b
    /*
    < 0 = a ordenado antes de b
    > 0 = b ordenado antes de a
    == a ordem da declaração é mantida
    */
}
