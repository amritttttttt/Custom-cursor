var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")
var h1 = document.querySelector("h1")

main.addEventListener("mousemove",function( dets){
 crsr.style.left = dets.x + "px"
 crsr.style.top = dets.y + "px"
})


