'use strict';

//Goal is to extract the symbols of stocks whose price 
// is > 150.00

var stocks = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
];

// First use filter to return an array of stocks
// with a value greater than 150.00
// Then use map to pull out the symbols for the filtered stocks
// Finally, use forEach to iterate over the final result, 
// and print the stock symbols out to the console.
var filteredStockSymbols = 
  stocks.
    filter(function(stock) {
      return stock.price >= 150.00;
    }).
    map(function(stock) {
      return stock.symbol;
    });

filteredStockSymbols.forEach(function(symbol) {
  console.log(symbol);
});