var exec = require('child_process').exec;

// exec("xdg-open http://askubuntu.com/");

exec('git version',function(err,stdout) {
    if(err) {
        throw err;
    }

    console.log('git version')
    console.log(stdout)
})