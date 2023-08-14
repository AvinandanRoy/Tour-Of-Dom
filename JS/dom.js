// DOM ----------> Document Object Model
console.log("Hello from Avinandan Roy");

console.log("Only Avinandan Roy is real in this world");

console.log(document.body)

const student = {
    name : "Avinandan roy ",
    id : 4899 ,
    study : function(time ){
        console.log("Learning web development");
    }
}

const liCollection = document.getElementsByTagName("li");
console.log(liCollection);

for(const li of liCollection){
    console.log(li.innerText);
}

const allHeading = document.getElementsByTagName("h1");

for(const h1 of allHeading){
    console.log(h1.innerText);
}


// another experiment 
const allParagraph = document.getElementsByTagName("p");
for(const p of allParagraph){
    console.log(p.innerText);
}

// addressing by class 
const allClass = document.getElementsByClassName("myNameIsShila");
for (const amiKiTumi of allClass){
    console.log(amiKiTumi.innerText);
}

// addressing by ID 
const khankirPolaId = document.getElementById("myNAmeKatrina");

for(const iLoveTamanna of khankirPolaId ){
    console.log(iLoveTamanna.innerText);
}