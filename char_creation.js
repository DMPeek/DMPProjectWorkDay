const character = {}


document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    character.name = document.getElementById("name").value;
    character.class = document.getElementById("classSelector").value;
    character.age = document.getElementById("age").value;
    character.hair = document.getElementById("hair").value;

    let characterString = JSON.stringify(character);
    localStorage.setItem("Your Character", characterString);
    console.log(localStorage);
    console.log(character);


    // let charResult = document.createElement("fieldset");
    // charResult.id = "results";
    // let charResultLegend = document.createElement("legend");
    // charResultLegend.innerText = "Character Details!";
    // let charResultText = document.createElement("span");
    // charResultText.innerText = JSON.stringify(character);

    // charResult.appendChild(charResultLegend);
    // charResult.appendChild(charResultText);
    // document.body.appendChild(charResult);
})

document.getElementById("finalize").onclick = function() {
    location.href="resultspage.html";
};

