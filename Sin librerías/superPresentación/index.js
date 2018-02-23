

setTimeout(empezando, 2000);
setTimeout(siguiendo, 6000);
setTimeout(siguiendo2, 10000);
setTimeout(siguiendo3, 14000);

function empezando() {
    console.log('1')
    $(".centrar").fadeOut(1000, ()=>$(".centrar2").fadeIn(1000)); 
}
function siguiendo() {
    console.log('2')
    $(".centrar2").fadeOut(1000, ()=>$(".centrar3").fadeIn(1000));
}
function siguiendo2() {
    console.log('3')
    $(".centrar3").fadeOut(1000, ()=>$(".centrar4").fadeIn(1000));
}
function siguiendo3() {
    console.log('4')
    $(".centrar4").fadeOut(1000, ()=>$(".centrar5").fadeIn(1000));
}