// add a random fact to the homepage
var facts = ["co2 is bad",
            "co2 kills trees",
            "stop using the car",
            "do  more greens",
            "eat brussel sprouts"
            ]
var rand_fact = Math.floor(Math.random() * 5);      
var el_facts = document.getElementById('cool_fact');
el_facts.innerHTML = facts[rand_fact];

// add the user's total emissons to the homepage
var total_emission = "40kg"
var el_emission = document.getElementById('total_emissions');
el_emission.innerHTML = total_emission;

// function to continue to the app
function advance(){
    location.href='base.html';
}

// add event listener to whole page to continue to main app
var el_app = document.getElementById('screen');
el_app.addEventListener("click", function(){advance()}, false);