/*
Q35. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
* Modify your program to print a statement about each animal, such as
A dog would make a great pet.
* Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!
*/
var myPet = ["Cat", "Cow", "Dog", "Goat", "Camel"];
for (var i = 0; i < myPet.length; i++) {
    console.log("".concat(myPet[i]));
}
for (var _i = 0, myPet_1 = myPet; _i < myPet_1.length; _i++) {
    var i = myPet_1[_i];
    console.log("A ".concat(i, " would ake a great pet"));
}
console.log("These animals would make a great pet!");
