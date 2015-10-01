'use strict';

var Observable = Rx.Observable;

// Capture references to red square (parent)
// and child (widget)
var parent = document.getElementById("parent");
var widget = document.getElementById("widget");

// Capture events we are interested in
// and then convert these DOM events to observables
// so that we can use our methods to process and consume
// the events
var mouseDowns = Observable.fromEvent(widget, "mousedown");
var parentMouseMoves = Observable.fromEvent(parent, "mousemove");
var parentMouseUps = Observable.fromEvent(parent, "mouseup");

// var stocks = 
//   exchanges.
//     map(function(exchange) {
//       return exchange.stocks.
//         filter(function(stock) { return stock.price >= 100.00; });
//     }).
//     concatAll();

var drags = 
  mouseDowns.
    map(function(e) {
      return parentMouseMoves.
        takeUntil(parentMouseUps);
    }).
    concatAll();

var subscription = 
  drags.forEach(
    function onNext(e) {
      widget.style.left = e.clientX + "px";
      widget.style.top = e.clientY + "px";
    },
    // Tese streams go on for ever...so...
    // In this case, these are optional since
    // 1) No errors are emitted by the DOM events
    // 2) We want to continue listening for mousedown
    // events. So there is no "completion" that will happen
    // The subscription object is not needed either in this scenario
    function onError(error) {
      console.log('error');
    },
    function onCompleted() {
      
    });