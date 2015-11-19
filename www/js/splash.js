function advance(){
    
    console.log('clicked');
    location.href='base.html';
}

    console.log('loaded');

var el_app = document.getElementById('screen');
el_app.addEventListener("click", function(){advance()}, false);