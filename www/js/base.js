// globals (soz)
var mode = "";
var running = false;
var distance = 0;
var emissions = 0;

// from http://www.carbonindependent.org/sources_car.html
em_per_mile = 430;

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
    pub.classList.remove("pub_selected");
    priv.classList.add("deselected");
    priv.classList.remove("priv_selected");
    
    // if button is not already selected
    if ( !pers.classList.contains('per_selected') ){
        // select this button
        pers.classList.add("per_selected");
        // set mode
        mode = "personal";
        //show startbutton
        startButtonOn();
    }
    else{
        // otherwise remove selected
        pers.classList.remove('per_selected');
        pub.classList.remove("deselected");
        priv.classList.remove("deselected");
        // hide start button
        startButtonOff();
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
    pers.classList.remove("per_selected");
    priv.classList.add("deselected");
    priv.classList.remove("priv_selected");
    
    // if button is not already selected
    if ( !pub.classList.contains('pub_selected') ){
        // select this button
        pub.classList.add("pub_selected");
        // set mode
        mode = "public"
        // show start button
        startButtonOn();
    }
    else{
        // otherwise remove selected
        pub.classList.remove('pub_selected');
        pers.classList.remove("deselected");
        priv.classList.remove("deselected");
        //hide start button
        startButtonOff();
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
    pub.classList.remove("pub_selected");
    pers.classList.add("deselected");
    pers.classList.remove("per_selected");
    
    // if button is not already selected
    if ( !priv.classList.contains('priv_selected') ){
        // select this button
        priv.classList.add("priv_selected");
        // set mode
        mode = "private"
        // show start button
        startButtonOn();
    }
    else{
        // otherwise remove selected
        priv.classList.remove('priv_selected');
        pub.classList.remove("deselected");
        pers.classList.remove("deselected");
        startButtonOff();
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
    
    // calculate stats
    // %todo%
    calcEmissions();
    
    // show popup of stats
    var over = document.getElementById("overlay");
    var over_cont = document.getElementById("overlay_content");
    
    over.classList.remove("hidden");
    over_cont.classList.remove("hidden");
    
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
    pers.classList.remove("per_selected");
    pub.classList.remove("pub_selected");
    priv.classList.remove("priv_selected");
    
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

// function to hide the overlay
function hide_overlay(){
    var over = document.getElementById("overlay");
    var over_cont = document.getElementById("overlay_content");
    
    over.classList.add("hidden");
    over_cont.classList.add("hidden");
    
    // reset variables
    running = false;
    mode = "";
}

var el_over = document.getElementById("overlay");
var el_over_cont = document.getElementById("overlay_content");
el_over.addEventListener("click", function(){hide_overlay()}, false);
el_over_cont.addEventListener("click", function(){hide_overlay()}, false);


//function to calculate the emissions of a journey
function calcEmissions(){
    //faked for now
    distance = Math.floor(Math.random() * 20) + 1;  //random num between 1 and 20
    
    // calculate emissions from fake distance
    worst_case = distance * em_per_mile;
    if (mode == "personal"){
        emissions = worst_case;
    }
    else if (mode == "public"){
        emissions = worst_case / 2;
    }
    else{
        emissions = 0;
    }
    
    // show the details to the user
    var dist = document.getElementById("distance");
    var tran = document.getElementById("transport");
    var emis = document.getElementById("emissions");
    var butn = document.getElementById("fakebutton");
    
    //show distance
    dist.innerHTML = distance + " miles"
    
    // show mode
    tran.innerHTML = mode + " transport"
    
    // show emissions
    emis.innerHTML = emissions + " grams of CO2"
    
    //colour button depending on mode of transport
    if (mode=="personal"){
        butn.classList.add("green_butn");
        butn.classList.remove("orange_butn");
        butn.classList.remove("red_butn");
    }
    else if (mode=="public"){
        butn.classList.remove("green_butn");
        butn.classList.add("orange_butn");
        butn.classList.remove("red_butn");
    }
    else{
        butn.classList.remove("green_butn");
        butn.classList.remove("orange_butn");
        butn.classList.add("red_butn");
    }
}
