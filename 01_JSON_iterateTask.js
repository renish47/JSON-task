let jsonObj = {
  "name":"Ram",
  "age": 23,
  "gender": "Male",
  "nationality":"Indian",
  "mother toungue":"Tamil"
};

let keys = Object.keys(jsonObj)


// normal for loop

for(let i = 0; i<keys.length;i++){
  console.log( keys[i]+":"+jsonObj[keys[i]] )
}



// forIn loop

for(let key in jsonObj){
  console.log(key+":"+jsonObj[key])
}



//forOf loop

for(let key of keys){
  console.log(key+":"+jsonObj[key])
}




//forEach loop

keys.forEach((key)=> console.log(key+":"+jsonObj[key]))









