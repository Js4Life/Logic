function randomGenerator(min, max) {
    return Math.random() * (max - min) + min;
}


function zigzag(currentVal) {
    var val = currentVal + randomGenerator(3, 6);
    console.log('val',val);
    return val > 90 ? 90 : val;
}

// zigzag(3);  // prints random values between 3 and 9 but not in increasing order!

arr = [
    {
        'filename': 'sbi',
        'percentage': randomGen(30, 40),
        'status': 'uploading'
    }, {
        'filename': 'citi',
        'percentage': randomGen(30, 40),
        'status': 'uploading'
    }, {
        'filename': 'hs',
        'percentage': randomGen(30, 40),
        'status': 'uploading'
    }, {
        'filename': 'abc',
        'percentage': randomGen(30, 40),
        'status': 'uploading'
    }
]

function randomGen(min, max) {
    return Math.random() * (max - min) + min;
}


function changePercentage() {
    arr.forEach(obj => {
        var PercentageVal = zigzag(obj.percentage);
        obj['percentage'] = PercentageVal;
        if (PercentageVal > 10 && PercentageVal < 30) {
            obj['status'] = 'Analysis Context';
        }
        if (PercentageVal > 31 && PercentageVal < 40) {
            obj['status'] = 'Upload Context';
        }
        if (PercentageVal > 41 && PercentageVal < 60) {
            obj['status'] = 'parsing Context';
        }
        if (PercentageVal > 70 && PercentageVal < 90) {
            obj['status'] = 'ready to view';
        }

      

    })
}

// changePercentage();

function timer() {
    setInterval(changePercentage, 2000); 
     console.log('arr',arr);
}

timer();
