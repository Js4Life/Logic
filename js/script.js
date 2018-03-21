window.onkeyup = EventCapturing;

function EventCapturing(e) {
    console.log(e.target.value)
    var findVal = e.target.value;
    console.log('findval',findVal)
 bindingVar.myTextArea = search(findVal , newArr)
}

var bindingVar = {};
(function () {
    var bindClasses = ["name", "age","myTextarea"];
    var attachEvent = function (classNames) {
        classNames.forEach(function (className) {
            var elements = document.getElementsByClassName(className);
            for (var index in elements) {
                elements[index].onkeyup = function () {
                    for (var index in elements) {
                        elements[index].value = this.value;
                    }
                }
            }
            Object.defineProperty(bindingVar, className, {
                set: function (newValue) {
                    for (var index in elements) {
                        elements[index].value = newValue;
                    }
                }
            });
        });
    };
    attachEvent(bindClasses);
})();

bindingVar.name = 'Hari'
bindingVar.age = 23;
var fullContent = document.getElementById('newId').value;
var newArr = fullContent.split(' ');
console.log('arr', newArr)

function seta() {
    for(var i=0;i<newArr.length;i++) {
        console.log(newArr[i]);
     }

}

function search(nameKey, stringArr) {
    console.log('key',nameKey + "arr" +stringArr)
    console.log('json',JSON.stringify(stringArr))
    var newarr = JSON.stringify(stringArr);
    for (var i = 0; i < stringArr.length; i++) {
        if (stringArr[i].toLowerCase() === nameKey.toLowerCase()) {
            return stringArr[i];
        }
    }
}

    // var value =  _.filter(newarr, function(obj) { 
    //     console.log(obj);
    //             return obj.indexOf('ABC') != 1;
    //     })
    
      
  

    // }






