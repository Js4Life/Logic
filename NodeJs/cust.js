var Person = require('./lib/person'); // no js extension

var raghu = new Person('RAGHU');
var george = new Person('GEORGE');

george.on('speak',function() {
    console.log(`${this.name} -> ${said}`);
})

ben.on('speak',function(said) {
    console.log(`${this.name}:${said}`)
})

ben.emit('speak','you may delay but time will not')
george.emit('speak','it is far better')
