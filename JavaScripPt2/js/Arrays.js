document.write('Hello world!')

document.write('<br>')

/* 
ATENCAO CASO UTILIZAR A FUNÇÃO leght() EM CASOS DE ARRAYS QUE NÃO COMEÇEM COM O ÍNDICE ZERO.
ELE VAI CONTAR DO 0 ATÉ O PRIMEIRO ELEMENTO E CONSIDERAR UNDEFINED, DO MESMO JEITO... OU SEJA
NÃO É O IDEAL, EXCETO NECESSIDADE, INICIAR UM ARRAY COM INDICE DIFERENTE DE ZERO
*/

var frutas = Array()


    frutas[1]= 'Banana'
    frutas[2]= 'Melancia'
    frutas[3]= true
    frutas['y']= 'Morango'
    frutas[5]= 100

    console.log(frutas)

    console.log(frutas[2])


    var carros = ['gol', 'palio', 'uno', 'fiesta', 'ka']

    console.log(carros)
    console.log(carros[0])

    var lista_frutas = Array('Banana', 'Maçã', 'Morango', 'Uva')
    console.log(lista_frutas[0])

