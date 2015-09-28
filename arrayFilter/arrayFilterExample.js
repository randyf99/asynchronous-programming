'use strict';

// filter allows us to iterate over an array
// returning only those results that pass
// a test
// First a more conventional aproach using
// forEach
function getStocksOverOne(stocks, minPrice) {
 var results = [];

 stocks.forEach(function(stock) {
  if (stock.price >= minPrice) {
    results.push(stock);
  }
 });

 return results;
}

var expensiveStocksOne = getStocksOverOne([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
],
150.00);

console.log(JSON.stringify(expensiveStocksOne));

// Now using JavaScripts filter method
function getStocksOver(stocks, minPrice) {
  return stocks.filter(function(stock) {
    return stock.price >= minPrice;
  });
}

// The filter function accepts a predicate
// which is a function that accepts a value
// and returns true or false

// Array.prototype.filter = function(predicate) {
//   var results = [];

//   this.forEach(function(item) {
//     if (predicate(item)) {
//       results.push(item);
//     }
//   });

//   return results;
// };

var expensiveStocks = getStocksOver([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
],
150.00);

console.log(JSON.stringify(expensiveStocks));