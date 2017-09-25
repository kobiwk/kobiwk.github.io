
(function(){
  var imageOnHover = document.getElementById('animate'),
      imageOnTouch = document.getElementById('animate');

  imageOnHover.addEventListener('mouseover', function(){
    function myMove() {
    var elem = document.getElementById("animate");   
    elem.style = 'animation: rotation 1s 3 ease-in-out;';
    return alert('ups');
  }
  myMove();

 
});

 imageOnTouch.addEventListener('ontouchstart', function(){
    function myMoveTouch() {
    var ele = document.getElementById("animate");   
    ele.style = 'animation: rotation 1s 3 ease-in-out;';
    return alert('ups');
  }
  myMoveTouch();
  });
})();

