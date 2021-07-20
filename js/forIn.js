//var lista = ['Thiago', 'Mariana', 'Rita', 'Bethoven', 'Clinton']

lista = Array()

lista['a'] = 'Thiago'
lista[10]= 'Mariana'
lista['dog'] = 'Rita'
lista [-1] = 'Clinton'
lista [true] = 'Bethoven'

console.log(lista)

for (var x in lista) {
    console.log('Índice ' + x + ' valor ' + lista[x])
}