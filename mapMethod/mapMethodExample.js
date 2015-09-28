'use strict';

// Map is great if you want to apply a transformation 
// to each item in an array, and collect tha results 
// into another array
function getStockSymbols(stocks) {
  // The function is the projection function
  return stocks.map(function(stock) {
    return stock.symbol;
  });
}

// Map shortens the code of applying a transformation
// to each item in an array, and returning another array
// with the transformation
// TheP projections is the functiont hatper performs the
// transformation
// Map works asynchronously unlike conventional loops

// Array.prototype.map = function(projection) {
//   var results = [];

//   this.forEach(function(item) {
//     reults.push(projection(item));
//   });

//   return results;
// };

var symbols = getStockSymbols([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbols));