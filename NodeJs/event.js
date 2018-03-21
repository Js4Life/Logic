// var events = require('events'); OR

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var Person = function(name) {
    this.name = name;
}

util.inherits(Person,EventEmitter);

var ben = new Person('Ben Franklin')

ben.on('speak',function(said) {
    console.log(`${this.name}:${said}`)
})

ben.emit('speak','you may delay,but time will not');





// var emitter = new events.EventEmitter(); // event emitter is itself a constructor

// emitter.on('customEvent',function(message,status) {
//     console.log(`${status}:${message}`)
// })

// emitter.emit('customEvent','Hello world',200)