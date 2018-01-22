
let drop = document.getElementById('myDropdown');

function myFunction(){
  drop.classList.toggle("show");
  drop.style.transition = 'all 2s'
}

window.onclick = function (event){
  if (!event.target.matches('.icono_header2')) {
    if (drop.classList.contains('show')) {
      drop.classList.remove('show')
    }
  }
}
