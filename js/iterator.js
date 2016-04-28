function iterate(tabela,behavior) {

  for(x = 0; x <= tabela.length - 1; x++){
    var paciente = behavior(tabela[x])
    console.log(paciente.pegaImc());
  }
}
