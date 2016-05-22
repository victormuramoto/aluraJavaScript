var botao = document.getElementById("calcula-imcs")

botao.addEventListener("click", function() {
  var tabela = document.getElementsByClassName("paciente")

    iterate(tabela,function(pacienteTr) {
      montaPaciente(pacienteTr).pegaImc()
    })
})
