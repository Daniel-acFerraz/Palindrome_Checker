function palindrome(str) {
    let polishedStr = str
    .replace(/[^a-z0-9A-Z]/g,'')
    .replace(/_/g,'')
    .toLowerCase();
    
    return polishedStr == polishedStr.split('').reverse().join('')
}