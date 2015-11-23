// add a random fact to the homepage
var facts = ["The average broad leaved tree will absorb 1 tonne of CO2 in it's lifetime (~100 years).",
            "The average car produces 1 tonne of CO2 every 2500 miles.",
            "36,000,000,000 tonnes of CO2 were produced in 2013."
            ]
var rand_fact = Math.floor(Math.random() * facts.length);      
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
