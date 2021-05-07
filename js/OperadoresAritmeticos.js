var num1 = 9
var num2 = 2

//operação báscia com a passagem e operação de apenas dois inteiros:
document.writeln(num1 + num2)
document.writeln('<br>')

//Concatenando com texto (atenção a necessidade de adição do operador de concatenação):
document.writeln('A soma das variáveis é: ' + (num1 + num2) + '<br>')

document.writeln('A soma das variáveis: ' + num1 + ' + ' + num2 + ' resulta em: ' + (num1 + num2) + '.' + '<br>')
document.writeln('A subtração das variáveis: ' + num1 + ' - ' + num2 + ' resulta em: ' + (num1 - num2) + '.' + '<br>')
document.writeln('A multiplicação das variáveis: ' + num1 + ' * ' + num2 + ' resulta em: ' + (num1 * num2) + '.' + '<br>')
document.writeln('A divisão das variáveis: ' + num1 + ' / ' + num2 + ' resulta em: ' + (num1 / num2) + '.' + '<br>')
document.writeln('O módulo (resto) entre as variáveis: ' + num1 + ' |n| ' + num2 + ' resulta em: ' + (num1 % num2) + '.' + '<br>')

document.writeln('<br>')

//incrementos e decrementos, observar ordem de precedência

document.writeln('Incrementando num1: ' + num1 + ' -> ' + (num1++) + '.' + '<br>')
document.writeln((num1) + '<br>')
document.writeln('Incrementando num1: ' + num1 + ' -> ' + (++num1) + '.' + '<br>')

document.writeln('<br>')

//observar que após os incrementos acima num1 agora vale inicilamente 11, ou seja valor ja incrementado cfe. instruções anteriores.
document.writeln('Decrementando num1: ' + num1 + ' -> ' + (num1--) + '.' + '<br>')
document.writeln((num1) + '<br>')
document.writeln('Decrementado num1: ' + num1 + ' -> ' + (--num1) + '.' + '<br>')

//para evitar problemas na concatenação de strings e numbers, em função da utilização do operador '+' converter os dados atravésde
//casting após a leitura no browser. Ex.:

var num1 = prompt('Informe num1: ')
var num2 = prompt('Informe num2: ')

var num1 = parseFloat(num1) // neste exemplo transformando em um float
var num2 = parseInt(num2) // neste exemplo transformando em um int