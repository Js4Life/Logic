var waitTime = 3000; // ms
var currentTime = 0;
var waitInterval = 100;
var percentWaited = 0;

function writeWaitingPercentange(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting ...${p} %`);
}   

var interval = setInterval(function(){
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime) * 100);
  //  console.log(`waiting ${currentTime/1000} seconds...`);
    writeWaitingPercentange(percentWaited);
},waitInterval);

 console.log('wait for it');

 setTimeout(function() {
     clearInterval(interval);
    console.log('\n\n done \n\n')
 },waitTime);

 process.stdout.write('\n\n');
 writeWaitingPercentange(percentWaited);