function palindrome(str) {
    let polishedStr = str
    .replace(/[^a-z0-9A-Z]/g,'')
    .replace(/_/g,'')
    .toLowerCase()
    .split('');

    let reverseStr = []

    for (let i = polishedStr.length-1; i >=0; i -= 1){
     reverseStr.push(polishedStr[i])  
    }
   
     return reverseStr.join("") == polishedStr.join("");
   }

