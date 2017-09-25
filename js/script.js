function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style = 'animation: rotation 1s infinite linear;';
   
      //elem.style.left = pos + 'px'; 
    }
  }
}  