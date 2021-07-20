var gremio95 = Array()

gremio95 = [
    'Danrley'
    , 'Arce'
    , 'Rivarola'
    , 'Adilson'
    , 'Roger'
    , 'Dinho'
    , 'Goiano'
    , 'Arilson'
    , 'C. Miguel'
    , 'P. Nunes'
    , 'Jardel'
]
document.writeln(gremio95)
console.log(gremio95)
document.writeln('<hr>')

var gremio17 = Array()

gremio17 = [
    'M. Grohe'
    , 'Edilson'
    , 'Kannemman'
    , 'Geromel'
    , 'Cortez'
    , 'Jailson'
    , 'Arthur'
    , 'Ramiro'
    , 'Fernandinho'
    , 'Luan'
    , 'L. Barrios'
]
document.writeln(gremio17)
console.log(gremio17)
document.writeln('<hr>')

console.log(gremio17.indexOf('Luan'))

//com uma sintaxe mais enxuta:

var aux = gremio17.indexOf('Luan')
if (aux === -1) {
    console.log('Elemento não existe.')
} else {
    console.log('Elemento esta na posição ' + aux)
}



/*
if (gremio17.indexOf('Luan') === -1) {
    console.log('Elemento não existe.')
} else {
    console.log('Elemento esta na posição ' + gremio17.indexOf('Luan'))
}
*/

