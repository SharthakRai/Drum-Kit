
var audio = new Audio('sounds/tom-1.mp3');

document.querySelector('button').addEventListener('click', function () {


    //click all button
    var buttons = document.querySelectorAll('.drum');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            

            audio.play();
            

        });
    }



  });dd