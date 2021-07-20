//#region Aula Anterior

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

document.write('<br><hr>')


//a partir daqui para esta aula:


//#endregion


lista_coisas['carros'][6].push('Chave-de-Rodas')//acrecentando um elemento com o método push no FINAL do array
document.writeln(lista_coisas['carros'][6]) 

document.write('<br>')

lista_coisas['carros'][6].unshift('Bateria')//acrecentando um elemento com o método push no INICIO do array
document.writeln(lista_coisas['carros'][6])

document.write('<br><hr>')

lista_coisas['carros'][6].pop()
document.writeln(lista_coisas['carros'][6])//removendo do final do vetor

document.write('<br>')

lista_coisas['carros'][6].shift()
document.writeln(lista_coisas['carros'][6])//removendo do inicio do vetor

document.write('<br><hr>')

