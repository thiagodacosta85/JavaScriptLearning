var opcao = prompt ('Informe a opção: ' )

var opcao = (parseFloat(opcao))

switch (opcao) {
    case 0:
        document.write('Fica parado.')
        break
    case 1:
        document.write('Anda uma casa.')
        break
    case 2:
        document.write('Anda duas casas.')
        break
    case 3:
        document.write('Anda três casas.')
        break
    default:
        var opcao = prompt('Opção inválida, informe novamente: ')
}