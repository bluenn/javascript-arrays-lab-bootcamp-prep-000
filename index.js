var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
//var kittens = ["Milo", "Otis", "Garfield"];
kittens.push(name);
return kittens;

}

function destructivelyPrependKitten(name) {
kittens.unshift(name);
 return kittens;
 }

function destructivelyRemoveLastKitten() {
  kittens.pop()
   return kittens;

}

function removeFirstKitten() {
  kittens.shift();
  return kittens;
}
