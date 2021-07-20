
/* 
ver obs. sobre lenght() no arquivo arrays.js caso necessário...
*/

var lista_coisas = Array()

lista_coisas['frutas'] = Array()
lista_coisas['carros'] = Array()

lista_coisas['frutas'][0] = 'Banana'
lista_coisas['frutas'][1] = 'Maçã'
lista_coisas['frutas'][2] = 'Pera'
lista_coisas['frutas'][3] = 'Uva'
lista_coisas['carros'][0] = 'Gol'
lista_coisas['carros'][1] = 'Uno'
lista_coisas['carros'][2] = 'Corsa'
lista_coisas['carros'][3] = 'Palio'
lista_coisas['carros'][4] = 'Fiesta'
lista_coisas['carros'][5] = 'Saveiro'
lista_coisas['carros'][6] = Array()

lista_coisas['carros'][6] = ['Pneu','Roda', 'Estepe']



console.log(lista_coisas)

document.writeln(lista_coisas['frutas'][1] + ' ' + lista_coisas['carros'][3]) 