document.writeln('Verificação de notas e frequencia: ')
document.writeln("<br>")
document.writeln("<br>")


var nome = prompt('Digite o nome do aluno: ')
document.writeln('Nome: ' + nome)
document.writeln("<br>")

var media = prompt('Digite a média do aluno: ')

while (media < 0 || media > 10) {
    alert('Valor inválido! Informe qualquer valor entre 0 e 10.')
    var media = prompt('Digite a média do aluno: ')
}
document.writeln('Média: ' + media)
document.writeln("<br>")

var frequencia = prompt('Digite o % de frequencia (somente números): ')
while (frequencia < 0 || frequencia > 100) {
    alert('Valor inválido! Informe qualquer valor entre 0% e 100%.')
    var frequencia = prompt('Digite a média do aluno: ')
}
document.writeln('% de Frequencia: ' + frequencia + '%.')
document.writeln("<br>")

if (media >= 6.5 && frequencia >= 75) {
    document.writeln('Situação: APROVADO')
} else {
    document.writeln('Situação: REPROVADO')
}