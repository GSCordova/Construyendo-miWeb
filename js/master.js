

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
