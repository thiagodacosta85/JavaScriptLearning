var idade = prompt('Informe e a idade:')

if (idade >= 0 && idade < 15) {
    document.writeln('Criança.')
}
else if (idade >= 15 && idade < 30) {
    document.writeln('Jovem.')
}
else if (idade >= 30 && idade < 60) {
    document.writeln('Adulto.')
} else {
    document.writeln('Idoso.')
}