function daycontent() {
    var display = document.getElementById('day-content').style.display;
    if (display == "none"){
        document.getElementById('day-content').style.display = "";
        document.getElementById('month-content').style.display = "none";
    }
}

function monthcontent() {
    var display = document.getElementById('month-content').style.display;
    if (display == "none"){
        document.getElementById('month-content').style.display = "";
        document.getElementById('day-content').style.display = "none";
    }
}