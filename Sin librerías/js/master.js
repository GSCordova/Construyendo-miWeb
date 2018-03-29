

function myFunction(){
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event){
  if (!event.target.matches('.icono_header2')) {
    if (document.getElementById("myDropdown").classList.contains('show')) {
      document.getElementById("myDropdown").classList.remove('show')
    }
  }
}

document.getElementById('secreto').addEventListener('click', ()=>{
  console.log('Condiciones del contrato de novios:')
  console.log('1-Ser sinceros (contarnos todo).');
  console.log('2-Darnos amor siempre (mimitos, coito humano).');
  console.log('3-Hacer planes divertidos (no caer en la rutina.)');
  console.log('4-Cuidarnos');
  console.log('5-Hacer lo imposible por seguir juntos.');
  console.log('6-Fidelidad máxima.');
  console.log('Gianmarco pide:');
  console.log('7-No cambies nunca, me encanta cómo eres y cómo me miras.');
  console.log('8-No me hagas daño.');
  console.log('Patricia pide:');
  console.log('9-Sigas tratándome igual de bien, porque eres monísimo y adorable.');
  console.log('10-No dejar de vernos jamás');
  console.log('Anexo:');
  console.log('11-No dejarnos nunca.');
})