alert('ATENÇÃO: programado para calcular IMC apenas de Adultos entre 20 e 60 anos. Clique OK para prosseguir.')

var nome = prompt('Informe o nome: ')
var peso = prompt('Informe o peso em kg, separado por "." (ponto): ')
var altura = prompt('Informe a altura em metros, separado por "." (ponto): ')

document.writeln('Dados informados: ' + '<br>')
document.writeln('Nome:   ' + nome + '<br>')
document.writeln('Peso:   ' + peso + 'kg' + '<br>')
document.writeln('Altura: ' + altura + 'm' +'<br>')

document.writeln('<hr>')

let imc = (peso / (altura * altura))

document.writeln('IMC apurado: ' + imc.toPrecision(4))


