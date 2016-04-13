var tdPeso = document.getElementById("peso-1").textContent;
var tdAltura = document.getElementById("altura-1");

console.log(tdPeso)

var paciente = {peso : document.getElementById("peso-1").textContent,altura : document.getElementById("altura-2").textContent};

if(paciente.altura > 0)
{
  console.log( paciente.peso / (paciente.altura * paciente.altura));
  document.getElementById('imc-1').textContent = ( paciente.peso / (paciente.altura * paciente.altura));
}
else
  console.log('A altura deve ser maior que 0');
