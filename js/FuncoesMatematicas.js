var b = Math.ceil (3.1415)
document.write(b)

document.write('<br>')

var a = Math.floor (3.1415)
document.write(a)

document.write('<br>')

var c = Math.round (7.49) // leva em considerecao o peso do valor para arredondar, basciamente um arredondamento de conta de bar
document.write(c)

document.write('<hr>')

var sorteio = Math.random() // fornece valores randomicos, porem apenas entre 0 e 1.
document.write(sorteio.toFixed(2)) // toFixed aplicado aqui para indicar o número de sejado de casas decimais.
document.write('<hr>')
