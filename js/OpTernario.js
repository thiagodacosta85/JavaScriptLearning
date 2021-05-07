document.writeln('Hello world.')
document.writeln('<br>')

/*
Operador ternário:
Sintax exemplo:
resultado = <condição> ? <verdadeiro> : <falso>
*/
var aproveitamento = 5 //posicao na tabela do campeonato
var aproveitamento = (aproveitamento <= 4 ? 'libertadores' : 'Sul Americana')
document.writeln(aproveitamento)

document.writeln('<br>')

var notas = prompt('Informe a nota final:')
var num_faltas = prompt('Informe a qtde. faltas:')
var faltas_maximas = 30
var media = 6.5

var aprovacao = (notas >= media && num_faltas <= faltas_maximas ? 'Aprovado' : 'Reprovado' )

document.writeln(aprovacao)