var mode = ""
var running = false

// Function to change the content of green button
function personal() {
    // do nothing if we are travelling
    if (running){}
    else{
    // get buttons
    var pers = document.getElementById("personal");
    var pub = document.getElementById("public");
    var priv = document.getElementById("private");
    
    //un unselect button
    pers.classList.remove('deselected');
    pub.classList.add("deselected");
    pub.classList.remove("pub_selected")
    priv.classList.add("deselected");
    priv.classList.remove("priv_selected")
    
    // if button is not already selected
    if ( !pers.classList.contains('per_selected') ){
        // select this button
        pers.classList.add("per_selected");
        // set mode
        mode = "personal"
        //show startbutton
        startButtonOn()
    }
    else{
        // otherwise remove selected
        pers.classList.remove('per_selected');
        pub.classList.remove("deselected");
        priv.classList.remove("deselected");
        // hide start button
        startButtonOff()
    }
    }
}
 
// Function to add event listener to green button
var el_pers = document.getElementById("personal");
el_pers.addEventListener("click", function(){personal()}, false);

// Function to change the content of amber
function public() {
    // do nothing if we are travelling
    if (running){}
    else{
    // get buttons
    var pers = document.getElementById("personal");
    var pub = document.getElementById("public");
    var priv = document.getElementById("private");
    
    //un unselect buttons
    pub.classList.remove('deselected');
    pers.classList.add("deselected");
    pers.classList.remove("per_selected")
    priv.classList.add("deselected");
    priv.classList.remove("priv_selected")
    
    // if button is not already selected
    if ( !pub.classList.contains('pub_selected') ){
        // select this button
        pub.classList.add("pub_selected");
        // set mode
        mode = "public"
        // show start button
        startButtonOn()
    }
    else{
        // otherwise remove selected
        pub.classList.remove('pub_selected');
        pers.classList.remove("deselected");
        priv.classList.remove("deselected");
        //hide start button
        startButtonOff()
    }
    }
}
 
// Function to add event listener to yellow button
var el_pub = document.getElementById("public");
el_pub.addEventListener("click", function(){public()}, false);

// Function to change the content of red button
function private() {
    // do nothing if we are travelling
    if (running){}
    else{
    // get buttons
    var pers = document.getElementById("personal");
    var pub = document.getElementById("public");
    var priv = document.getElementById("private");
    
    //un unselect button
    priv.classList.remove('deselected');
    pub.classList.add("deselected");
    pub.classList.remove("pub_selected")
    pers.classList.add("deselected");
    pers.classList.remove("per_selected")
    
    // if button is not already selected
    if ( !priv.classList.contains('priv_selected') ){
        // select this button
        priv.classList.add("priv_selected");
        // set mode
        mode = "private"
        // show start button
        startButtonOn()
    }
    else{
        // otherwise remove selected
        priv.classList.remove('priv_selected');
        pub.classList.remove("deselected");
        pers.classList.remove("deselected");
        startButtonOff()
    }
    }
}
 
// Function to add event listener to red button
var el_priv = document.getElementById("private");
el_priv.addEventListener("click", function(){private()}, false);

// functions to show/hide start button
function startButtonOn(){
    var start = document.getElementById("start");
    var help = document.getElementById("please_select");
    // swap help and start
    help.classList.add("hidden");
    start.classList.remove("hidden");
}
function startButtonOff(){
    var start = document.getElementById("start");
    var help = document.getElementById("please_select");
    //swap start and help
    start.classList.add("hidden");
    help.classList.remove("hidden");
}

// function to start record of travel
function start(){
    running = true
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    
    //swap start and stop
    start.classList.add("hidden");
    stop.classList.remove("hidden");
    
    // hide other buttons
    var pers = document.getElementById("personal");
    var pub = document.getElementById("public");
    var priv = document.getElementById("private");
    var pers_h = document.getElementById("personal_blank");
    var pub_h = document.getElementById("public_blank");
    var priv_h = document.getElementById("private_blank"); 
    
    if (mode!="personal"){
        pers.classList.add("hidden");
        pers_h.classList.remove("hidden");
    }
    if (mode!="public"){
        pub.classList.add("hidden");
        pub_h.classList.remove("hidden");
    }
    if (mode!="private"){
        priv.classList.add("hidden");
        priv_h.classList.remove("hidden");
    }
    
    //get and store co-ordinates
    // %todo%
}

// Function to add event listener to start button
var el_start = document.getElementById("start");
el_start.addEventListener("click", function(){start()}, false);

// function to stop record of travel
function stop(){
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var help = document.getElementById("please_select");
    
    // reset variables
    running = false
    mode = ""
    
    // show popup of stats
    // %todo%
    
    //swap stop and help
    stop.classList.add("hidden");
    help.classList.remove("hidden");
    
    // reset coloured buttons
    var pers = document.getElementById("personal");
    var pub = document.getElementById("public");
    var priv = document.getElementById("private");
    var pers_h = document.getElementById("personal_blank");
    var pub_h = document.getElementById("public_blank");
    var priv_h = document.getElementById("private_blank"); 
    // remove selected button
    pers.classList.remove("per_selected")
    pub.classList.remove("pub_selected")
    priv.classList.remove("priv_selected")
    // un unselect the others
    pers.classList.remove("deselected")
    pub.classList.remove("deselected")
    priv.classList.remove("deselected")
    // show defaukt buttons
    pers.classList.remove("hidden");
    pub.classList.remove("hidden");
    priv.classList.remove("hidden");
    // hide blank buttons
    pers_h.classList.add("hidden");
    pub_h.classList.add("hidden");
    priv_h.classList.add("hidden");
}

var el_stop = document.getElementById("stop");
el_stop.addEventListener("click", function(){stop()}, false);
