 // var listaFuncionarios = ['Viviane', 'Rosângela', 'Miguel', 'Lucas', 'Fernanda']
 var listaFuncionarios = Array()
 listaFuncionarios['x'] = 'Viviane'
 listaFuncionarios[false] = 'Rosângela'
 listaFuncionarios[3] = 'Miguel'
 listaFuncionarios[27] = 'Lucas'
 listaFuncionarios[-12] = 'Fernanda'
 //forEach começa a partir de 0 (cuidado!!!)

 var f = function(valor, indice){
   console.log(valor, indice)
 }

 listaFuncionarios.forEach(f)
 /* listaFuncionarios.forEach(function(valor, indice, array) {
   //logica
   console.log('indice ' + indice + ' | valor:' + valor)
   if(valor === 'Lucas'){
     array[indice] = 'Um novo valor'
   }
   console.log(array)
 }) */