var tabela = document.getElementsByClassName("paciente")

iterate(tabela,function(pacienteTr) {
  montaPaciente(pacienteTr).pegaImc()
})
