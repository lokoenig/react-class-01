console.log('destructoid');

const person = {
    name: 'Biggy',
    age: 92,
    location: {
        city: 'Salt Lake City',
        temp: 12
    }
};
const {name, age} = person;

console.log(`${name}`);

const book = {
    title: '60 Seconds Over Tokyo',
    publisher: {
      name:  'Random House',
    },
    author: 'Phil Smith'
};

const {name: pubName} = book.publisher;
console.log(pubName);

const addy = [
    '123 main',
    'Rochester',
    'MN',
    '89219'
];

const [, city, state] = addy;
console.log(`City: ${city}`);

const menuItem = [
    'Waffle',
    200,
    300,
    695
];
const [itemName, priceSmall, priceMed, priceLarge] = menuItem;

console.log(`A medium ${itemName} is ${priceMed}`);