
function next_handle(){
  document.querySelector(".tanya").style.display="none";
  document.querySelector(".john").style.display="flex";
}
function prev_handle(){
  document.querySelector(".tanya").style.display="flex";
  document.querySelector(".john").style.display="none";
}
// ********************MOUSE FUCNTIONS****************
for(var i=0;i<2;i++){
  var next=document.querySelectorAll(".button_box img")[i];
  next.addEventListener("click",next_handle);
}
for(var j=2;j<4;j++){
  var prev=document.querySelectorAll(".button_box img")[j];
  prev.addEventListener("click",prev_handle);
}


// *****************KEYBOARD FUNCTIONS******************
document.addEventListener("keydown",function(event){
  if(event.keyCode===39){
    next_handle();
  }
})

document.addEventListener("keydown",function(event){
  if(event.keyCode===37){
    prev_handle();
  }
})
