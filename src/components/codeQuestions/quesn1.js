// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
//  For example if you accept 025468 the output should be 0-254-6-8.

function insertDashes(num){
    let n1 = num.toString();
    // console.log(n1[0])
    let result = [n1[0]];
    for(let i =1; i<n1.length; i++){
      if(n1[i-1]%2 ===0 && n1[i]%2 ===0){
        result.push('-',n1[i]);
      }
      else{
        result.push(n1[i])
      }
      
    }
    console.log('ff',result.join(''))
  }
  
  insertDashes(225847);

//   o/p: ff 2-258-47