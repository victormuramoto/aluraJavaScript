var botao= document.querySelector("#adicionar-paciente");

botao.addEventListener("click",function(event){
  event.preventDefault();

  var newPatient = 	"<tr class='paciente'>"+
              "<td class='info-nome'>" + document.querySelector("#campo-nome").value + "</td>"+
              "<td class='info-peso'>" + document.querySelector("#campo-peso").value + "</td>"+
              "<td class='info-altura'>" + document.querySelector("#campo-altura").value + "</td>"+
              "<td class='info-imc'></td>"+
           "</tr>";

  var tabela = document.querySelector("table");
  tabela.innerHTML = tabela.innerHTML + newPatient;

  document.querySelector("#campo-nome").value = "";
  document.querySelector("#campo-peso").value = "";
  document.querySelector("#campo-altura").value = "";
})

botao.addEventListener("click",function(){
  pacientes = document.querySelectorAll(".paciente")
  montaPaciente(pacientes[pacientes.length - 1]).pegaImc();
})
