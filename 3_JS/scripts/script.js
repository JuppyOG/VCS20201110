// alert("As esu JS faile")

console.log("As esu konsoleje");

document.write("As esu dokumente");

var profile = {
    firstName: "Kazimiras",
    lastName: "Jarmolovskis",
    fullName: function (){
        return this.firstName + " " + this.lastName;
    },
    changeName: function(newFirstName) {
        this.firstName = newFirstName;
    }
}


profile.changeName("Tadas");
console.log(profile.fullName());



var paragraph = document.createElement("p");
paragraph.innerText = "Tekstas idetas i elementa su JS."

document.body.append(paragraph);


var button1 = document.querySelector("#change-p-color");
button1.addEventListener("click", function() {
    var outro = document.querySelector("div.outro p");
    if (outro.style.color == "red") {
        outro.style.color = "black";
    } else {
    outro.style.color = "red";
    }
});