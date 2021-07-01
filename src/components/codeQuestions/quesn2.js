//Q1- Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };
//     Sample Output: name,sclass,rollno

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    
    let str =[]
    for(let key in student){
      str.push(key);
    }
    console.log(str.join())

// o/p: name,sclass,rollno
// _____________________________________________________________________________________________
// Q2- Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before or after deleting the property.


var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    
    console.log(student)
    delete student.rollno;
    console.log(student)

// =====================================================================================
// q-2-Write a JavaScript program to display the reading status
//  (i.e. display book name, author name and reading status) of the following books.
var library = [ 
  {
      title: 'Bill Gates',
      author: 'The Road Ahead',
      readingStatus: true
  },
  {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      readingStatus: true
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      readingStatus: false
  }];

library.map((lib,index)=>{
if(lib.readingStatus == true){
  console.log('you have already read "', lib.title, '" by', lib.author)
}else
  console.log('Now read ', lib.title , ' by' , lib.author);
})
//  or use this below commented
// for (var i = 0; i < library.length; i++) 
//    {
//     var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//     if (library[i].readingStatus) {
//       console.log("Already read " + book);
//     } else
//     {
//      console.log("You still need to read " + book);
//     }
//    }
   

// o/p:
// you have already read " Bill Gates " by The Road Ahead
// you have already read " Steve Jobs " by Walter Isaacson
// Now read  Mockingjay: The Final Book of The Hunger Games  by Suzanne Collins

// ________________________________________________________________________________

// Q-3; Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

function getAllSubstrings(str){
  let i , j ,result = [];

  for(i = 0 ;i<str.length;i++){
    for(j = i+1; j<str.length+1;j++){
      result.push(str.slice(i,j))
    }
  }
  return result;
}

let theString = 'dog'
console.log(getAllSubstrings(theString))

// o/p:  ['d','do','dog','o','og','g']