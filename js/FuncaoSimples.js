document.writeln('Hello world!')

document.writeln('<br>')

document.writeln('Função para calcular a área de um terreno: ')

/*
function calcularAreaTerreno(larg, comp) {
    var area = larg * comp
    document.writeln('A área do terreno em questão é: ' + area + '.')
}*/

// como acima, ou:

function calcularAreaTerreno(larg, comp) {
    var area = larg * comp
    return area
}

document.writeln('<br>')

//document.writeln('A área do terreno em questão é: ' + calcularAreaTerreno(10, 30) + '.')

// ou:

var area = calcularAreaTerreno(10, 30)

document.writeln('A área do terreno em questão é: ' + area + '.')

document.writeln('<hr>')

function soma(a, b) {
    var result = a + b
    return result
}

// var total = soma(parseInt(3), parseInt(4), parseInt(5), parseInt(6)) - aqui nesse caso ele simplesmente vai descartar os parâmetros extras
//var total = soma(parseInt(3))// - aqui nesse caso ele vai retornar NaN (not a number)

var total = soma(parseInt(3), parseInt(4))
document.writeln('A o retorno da função foi: ' + total + '.')

