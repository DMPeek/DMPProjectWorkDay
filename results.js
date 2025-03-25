document.getElementById("restart").onclick = function() {
    location.href="homepage.html";
    localStorage.removeItem("Your Character");
};

window.onload = function() {
    const charString = localStorage.getItem("Your Character");
    const charObject = JSON.parse(charString);


    let nameResults = document.getElementById("nameResults");
    let classResults = document.getElementById("classResults");
    let ageResults = document.getElementById("ageResults");
    let hairResults = document.getElementById("hairResults");

    nameResults.innerText = charObject.name;
    classResults.innerText = charObject.class;
    ageResults.innerText = charObject.age;
    hairResults.innerText = charObject.hair;
};