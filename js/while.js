var idade = 0

document.write('Início <br />')

while (idade < 18 ){
    document.write( idade + ' menor de idade' + '<br />')
    idade++ //apenas uma forma de evitar um looping infinito.
    if(idade == 18){
        break
    }
}
document.write('Fim <br />')