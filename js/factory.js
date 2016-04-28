function montaPaciente(pacienteTabela) {

  return paciente = {
    nome : pacienteTabela.getElementsByClassName("info-nome")[0].textContent,
    peso : pacienteTabela.getElementsByClassName("info-peso")[0].textContent,
    altura : pacienteTabela.getElementsByClassName("info-altura")[0].textContent,
    pegaImc : function() {
      if(this.altura > 0){
        pacienteTabela.getElementsByClassName('info-imc')[0].textContent = ( this.peso / (this.altura * this.altura));
        return ( this.peso / (this.altura * this.altura));
      }
      else
        console.log('A altura deve ser maior que 0');
    }
  };

};
