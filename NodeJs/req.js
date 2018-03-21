var path = require('path'); // core modules

var util = require('util');

var v8 = require('v8');

util.log(path.basename(__filename));

var dirUploads = path.join(__dirname,'www','files','uploads')
util.log(dirUploads)

util.log(v8.getHeapSpaceStatistics())