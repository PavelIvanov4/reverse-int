function reverse(number){
  let str = number.toString(10);
  let str2 = str.split('').reverse().join('');
  return parseInt(str2); }
