'use strict';

var exchanges = [
  [
      { symbol: "XFX", price: 240.22, volume: 23432 },
      { symbol: "TNZ", price: 332.19, volume: 234 }
    ],
  [
      { symbol: "JXJ", price: 120.22, volume: 5323 },
      { symbol: "NYN", price: 88.47, volume: 98275 }
    ]
];

// let's print out all the stocks in exchanges
// using forEach

exchanges.forEach(function(exchange) {
  exchange.forEach(function(stock) {
    console.log(JSON.stringify(stock));
  });
});

// This is concatAll. We will add it to the Array 
// object
// All it does is flatten a nested array, and
// gives us a new array with the flattened result
// Flattens only by one dimension
// Also, it will not work on a one dimensional array
Array.prototype.concatAll = function() {
  var results = [];
  
  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);    
    });
  });  

  return results;
};


var stocks =  exchanges.concatAll();
    
stocks.forEach(function(stock) {       
  console.log(JSON.stringify(stock));  
});
