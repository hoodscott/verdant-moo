function daycontent() {
    var display = document.getElementById('day-content').style.display;
    if (display == "none"){
        document.getElementById('day-content').style.display = "";
        document.getElementById('month-content').style.display = "none";
        document.getElementById('day-tab').classList.remove('deselected');
        document.getElementById('month-tab').classList.add('deselected');
    }
}

function monthcontent() {
    var display = document.getElementById('month-content').style.display;
    if (display == "none"){
        document.getElementById('month-content').style.display = "";
        document.getElementById('day-content').style.display = "none";
        document.getElementById('month-tab').classList.remove('deselected');
        document.getElementById('day-tab').classList.add('deselected');
    }
}