var JsonArr1 = [{
    'id':1,
    'name': "Sagir",
    'Study':"CS1"
},{
    'id':2,
    'name': "Sayak",
    'Study':"CS"
}];

var JsonArr2 = [{
    'id':3,
    'name': "Raghu",
    'Study':"CS"
},{
    'id':4,
    'name': "SandipSir",
    'Study':"CS1"
}];

var JsonArr = JsonArr1.concat(JsonArr2);

for(var i=0;i<JsonArr.length-1;i++){
            if(JsonArr[i].Study ==JsonArr[i+1].Study){
                console.log(JsonArr[i].Study)
            }
    }
  
