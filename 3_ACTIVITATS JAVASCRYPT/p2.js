var age = 18;
var genre = "dona";

console.log(!(genre == "home" || age < 10));

if(age != 10) {
    console.log("No tens 10 anys");
} else {
    console.log("Tens 10 anys");
}

if(age <= 10) {
    console.log("Ets un infant");
} else {
    console.log("Ets adolescent o adult");
}

if(age >= 0 && age <= 3) {
    console.log("Ets un nadó o un nen petit");
} else if(age >= 3 && age < 18) {
    console.log("Ets un un nen gran");
} else if(age >= 13 && age < 18) {
    console.log("Ets un adolescent");
} else if(age > 18 && age < 40) {
    console.log("Ets un adult");
} else {
    console.log("Ets un adult gran");
}

if(!(genre == "home")) {
    console.log("Ets un home");
} else {
    console.log("Ets una dona");
}

var myName = prompt("Escriu el teu nom")