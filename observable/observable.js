'use strict';

var Observable = Rx.Observable;

var button = document.getElementById('button');
/*
var handler = function(e) {
  alert('clicked');
  button.removeEventListener('click', handler);
};

button.addEventListener('click', handler);
*/

var clicks = Observable.fromEvent(button, 'click');

// This code runs asynchrounously.
// Try/Catch will not work here, so
// three additional functions are offered 
// by forEach to enable error handling,
// Managing the event stream and completion
// Note the use of the subscription object used
// to unsubscribe from the event.
var subscription = 
  clicks.forEach(
    function onNext(e) {
      alert('clicked');
      subscription.dispose();
    },
    function onError(error) {           
      console.log('ERROR!');
    },
    function onCompleted() {
      console.log("done");
    });
