
/*
let drop = document.getElementById('myDropdown');
*/
function myFunction(){
  dropdown.classList.toggle("show");
  dropdown.style.transition = 'all 2s'
}
/*
window.onclick = function (event){
  if (!event.target.matches('.icono_header2')) {
    if (drop.classList.contains('show')) {
      drop.classList.remove('show')
    }
  }
}
*/
/*
let solucion = "false"

$('#boton').click(function(){
  return solucion = boton.getAttribute('aria-expanded')
  if (solucion === "true") {
      console.log("clickado cuando esta abierto")
    }
})*/

window.onclick = function(event){
  if (!event.target.matches('.pepe')){
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}

let dropdown = document.getElementById('navbarNavAltMarkup')
