// models/eatery.js

// Provided eatery data array
const eateriesData = [
    {
      id: 3226,
      name: 'Burger Queen',
      genre: 'American',
      address: '5 Pine St, Toronto',
      price: '$',
    },
    {
      id: 5475,
      name: 'Sushi King',
      genre: 'Japanese',
      address: '11 Maple Blvd, Toronto',
      price: '$$$',
    },
    {
      id: 9567,
      name: 'West Side Marios',
      genre: 'Italian',
      address: '43 Elm Ave, Toronto',
      price: '$$$',
    },
  ];
  
  // Function to get all eateries
  function getAll() {
    return eateriesData;
  }
  
  // Function to get one eatery by ID
  function getOne(id) {
    return eateriesData.find((eatery) => eatery.id === parseInt(id));
  }
  
  module.exports = {
    getAll,
    getOne,
  }
  ;module.exports = {
    index,
    show,
  };