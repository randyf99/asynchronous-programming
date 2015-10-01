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

// returns another ovservable object, in the same way
// that map returns an array object with arrays.
// In this case, it returns the x.y coordinates of the 
// mouse click
var points = 
  clicks.map(function(e) {
    return {x: e.clientX, y: e.clientY};
  });

var subscription = 
  points.forEach(
    function onNext(point) {
      alert('clicked:' + JSON.stringify(point));
      subscription.dispose();
    },
    function onError(error) {           
      console.log('ERROR!');
    },
    function onCompleted() {
      console.log("done");
    });
