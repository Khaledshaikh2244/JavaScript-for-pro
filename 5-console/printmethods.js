// Beside plain strings, console.log() can handle other types, like arrays, objects, dates, functions, etc.:



// for Array
console.log([0,5,4,"Helllo ji"]);

//for OBJt

console.log({'khaled': 'Student', 'adarsh' : 'student'});

//Nested objects may be collapsed:

console.log({'adarsh' : 'student', 'key2' :['two'], 'key3' : {a:1,b:2}});
//output in Terminal => { adarsh: 'student', key2: [ 'two' ], key3: { a: 1, b: 2 } }
//in cnsl => {adarsh: 'student', key2: Array(1), key3: {…}}
// adarsh
// : 
// "student"
// key2
// : 
// ['two']
// key3
// : 
// {a: 1, b: 2}



//DATE OBJ FNC

console.log(new Date(0));
//Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
//ONly show in cnsl




//ƒ test(a, b) { return c; }
function test (a,b){
    return c;
}

