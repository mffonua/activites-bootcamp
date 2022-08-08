var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";
var Galaxy = constellations.concat(planets);
// WRITE YOUR CODE BELOW
constellations.unshift ("Canis Major");
console.log(constellations);

planets.pop("Venus");
console.log(planets);

console.log("Galaxy")

var starcaps = star.toUpperCase ()
console.log(starcaps);