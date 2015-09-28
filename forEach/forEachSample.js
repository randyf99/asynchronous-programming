// From 'End of the Loop' by Jafar Husain 
'use strict';

// The traditional for loop approach
function getStockSymbolsOne(stocks) {
  var symbols = [],
      counter,
      stock;

  for(counter=0; counter < stocks.length; counter++) {
    stock = stocks[counter];
    symbols.push(stock.symbol);
  }

  return symbols;
}

var symbolsOne = getStockSymbolsOne([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbolsOne));

// Using forEach
// Convenient if you want to do something to 
// every item in an array
function getStockSymbols(stocks) {
  var symbols = [];
  
  // Accepts a closure, and invokes that closure
  // for every item in the array
  // and passes in the item (stock) as argument to the closure
  // Most important thing is that this method can run asynchronously 
  // unlike the for loop
  stocks.forEach( function(stock) {
    symbols.push(stock.symbol);
  });
  
  return symbols;
}

var symbols = getStockSymbols([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbols));
