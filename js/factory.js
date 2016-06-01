function montaPaciente(pacienteTr) {
  return paciente = {
    nome : pacienteTr.getElementsByClassName("info-nome")[0].textContent,
    peso : pacienteTr.getElementsByClassName("info-peso")[0].textContent,
    altura : pacienteTr.getElementsByClassName("info-altura")[0].textContent,
    pegaImc : function() {
      if(this.altura > 0){
        pacienteTr.getElementsByClassName('info-imc')[0].textContent = ( this.peso / (this.altura * this.altura));
      }
      else
        console.log('A altura deve ser maior que 0');
    }
  };

};
