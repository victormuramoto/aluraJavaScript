var tabela = document.getElementsByClassName("paciente")
// for(x = 0; x <= tabela.length - 1; x++)
var x = 0;
while ( x <= tabela.length - 1 )
{
    var paciente_tabela = tabela[x];

    var paciente = {
      nome : paciente_tabela.getElementsByClassName("info-nome")[0].textContent,
      peso : paciente_tabela.getElementsByClassName("info-peso")[0].textContent,
      altura : paciente_tabela.getElementsByClassName("info-altura")[0].textContent
    };

    if(paciente.altura > 0)
      paciente_tabela.getElementsByClassName('info-imc')[0].textContent = ( paciente.peso / (paciente.altura * paciente.altura));
    else
      console.log('A altura deve ser maior que 0');
    x++;
}
