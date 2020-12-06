function adicionar() {
  var alu = document.getElementById("aluno").value;
  var lista  = document.getElementById("lista").innerHTML;
  lista = lista +"<li>"+alu+"</li>";
  
  
  document.getElementById("lista").innerHTML = lista;
}
function materia() {
  var prep = document.getElementById("materias").value;
  var paragrafo  = document.getElementById("paragrafo").innerHTML;
  paragrafo = paragrafo +"<p>"+prep+"</p>";
  
  document.getElementById("paragrafo").innerHTML = paragrafo;
}
alert("Seja bem vindo");

