const dogs = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperament: ['Intelligent', 'Active', 'Instinctual', 'Faithful']
    },
    {
        id: 'dog-2',
        name: 'Bernese Mountain Dog',
        temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful']
    },
    {
        id: 'dog-3',
        name: 'Labrador Retriever',
        temperament: ['Intelligent', 'Even Tempered', 'Kind', 'Gentle']
    }
];

// Use forEach to print out the name of each dog to the console
dogs.forEach(dog => console.log(dog));

// Use filter AND map to create a new array that contains the names of
// the dogs that are 'Kind'.
const kindDogs = dogs.filter(dog => dog.temperament.includes("Kind"));
kindDogs.map(dog => dog.name);
console.log(kindDogs); 
// -> array of kind dog objects

// Use map to create a new array identical to the original,
// but with the id's of the dogs starting at dog-0 instead of dog-1
const reIdifiedDogs = dogs.map((dog, index) => ({
    ...dog,
    id: `dog-${index}`
}));
console.log(reIdifiedDogs);
// -> array of dog objects with the id starting at 0
