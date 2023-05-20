console.log('Running.');

const cats = ['Garfield', 'Tina', 'Joe'];
console.log(cats);

// add a cat name to the end of the original cats array
const destructivelyAppendCat = (name) => {
  cats.push(name);
};
destructivelyAppendCat("Reginald");
console.log(cats); // Expect ['Garfield', 'Tina', 'Joe', 'Reginald']


// add a cat name to the beginning of the original cats array
const destructivelyPrependCat = (name) => {
  cats.unshift(name);
};
destructivelyPrependCat("Cat");
console.log(cats); // Expect ['Cat', 'Garfield', 'Tina', 'Joe', 'Reginald']


// remove the last cat name from the original cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}
destructivelyRemoveLastCat();
console.log(cats);


// remove the first cat name from the original cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}
destructivelyRemoveFirstCat();
console.log(cats);



const catsReadOnly = ['Garfield', 'Tina', 'Joe'];
// appendCat(), prependCat()

const appendCat = (name) => {
  // Copy array using spread syntax
  const newCatsArray = [...catsReadOnly];
  // ...catsReadOnly = 'Garfield', 'Tina', 'Joe'
  newCatsArray.push(name);
  return newCatsArray;
};
console.log(appendCat('Reginald'));
console.log(catsReadOnly);

const prependCat = (name) => {
  const newCatsArray = [...catsReadOnly];
  newCatsArray.unshift(name);
  return newCatsArray;
};
console.log(prependCat('Reginald'));
console.log(catsReadOnly);
