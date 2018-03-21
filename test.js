for (let i = 1; i <= 5; i++) {
    setTimeout(function() { 
        console.log(`${i}`); 
        $(`#div${i}`).show('slow').fadeOut('fast');
    }, 1000*i);     // show all popups
}