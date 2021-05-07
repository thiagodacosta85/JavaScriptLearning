function exibirArtigo(id, callbackSucesso, callbackErro){
    //lógica: recuperar o id via requisição HTTP
    if(true){
      callbackSucesso('Funções de callback em JS', 'Funções de callback são muitas utilizadas....')
    } else {
      callbackErro('Erro ao recuperar os dados')
    }
  }

  var callbackSucesso = function(titulo, descricao){
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr />')
    document.write('<p>' + descricao + '</p>')
    
  }
  var callbackErro = function(erro){
    document.write('<p><b>Erro:</br>' + erro + '</p>')
  }

  exibirArtigo(1, callbackSucesso , callbackErro)