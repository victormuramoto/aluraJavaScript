var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var paciente = {peso : document.getElementById("peso-2").textContent,altura : document.getElementById("altura-2").textContent};

if(paciente.altura > 0)
{
  console.log( paciente.peso / (paciente.altura * paciente.altura));
  document.getElementsById('imc-2').textContent = ( paciente.peso / (paciente.altura * paciente.altura));
}
else
  console.log('A altura deve ser maior que 0');
