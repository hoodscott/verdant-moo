// Function to change the content of green button
function personal() {
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
        // show start button
    }
    else{
        // otherwise remove selected
        pers.classList.remove('per_selected');
        pub.classList.remove("deselected");
        priv.classList.remove("deselected");
    }
}
 
// Function to add event listener to green button
var el_pers = document.getElementById("personal");
el_pers.addEventListener("click", function(){personal()}, false);

// Function to change the content of amber
function public() {
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
        pub.classList.add("pub_selected");
        // show start button
    }
    else{
        // otherwise remove selected
        pub.classList.remove('pub_selected');
        pers.classList.remove("deselected");
        priv.classList.remove("deselected");
        //hide start button
    }
}
 
// Function to add event listener to yellow button
var el_pub = document.getElementById("public");
el_pub.addEventListener("click", function(){public()}, false);

// Function to change the content of red button
function private() {
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
        // show start button
    }
    else{
        // otherwise remove selected
        priv.classList.remove('priv_selected');
        pub.classList.remove("deselected");
        pers.classList.remove("deselected");
    }
}
 
// Function to add event listener red button
var el_priv = document.getElementById("private");
el_priv.addEventListener("click", function(){private()}, false);