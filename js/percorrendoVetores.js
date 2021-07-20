var lista = Array()

lista[0] = "Goleiro"
lista[1] = "Defensor"
lista[2] = "Central"
lista[3] = "Atacante"


console.log(lista)
console.log(lista.length)

var x = 0

while (x < lista.length) {
    document.write(lista[x] + '<br />')
    x++
}