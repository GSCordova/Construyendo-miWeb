

function myFunction(){
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event){
  if (!event.target.matches('.icono_header2')) {
    if (document.getElementById("myDropdown").classList.contains('show')) {
      document.getElementById("myDropdown").classList.remove('show')
    }
  }
};


var acumulador = '';

document.addEventListener('keyup', (ev) => {
  acumulador += ev.key
  if (acumulador.includes('patricia') || acumulador.includes('amor') 
  || acumulador.includes('te quiero') || acumulador.includes('tequiero') 
  || acumulador.includes('nosotros') || acumulador.includes('pringada')
  || acumulador.includes('gianmarco')){
    alert(`
      Condiciones del contrato de novios:
      1-Ser('1- sinceros (contarnos todo).
      2-Darnos amor siempre (mimitos, coito humano).
      3-Hacer planes divertidos (no caer en la rutina.
      4-Cuidarnos
      5-Hacer lo imposible por seguir juntos.
      6-Fidelidad máxima.
      Gianmarco pide:
      7-No cambies nunca, me encanta cómo eres y cómo me miras.
      8-No me hagas daño.
      Patricia pide:
      9-Sigas tratándome igual de bien, porque eres monísimo y adorable.
      10-No dejar de vernos jamás
      Anexo:
      11-No dejarnos nunca.
    `)
    acumulador = ''
  }
});