// Write function that takes in string
// returns which string has the highest value in terms of
// sum of their character values
// character values (a: 1, b: 2, c:3)

function high(string){
  const letterConversion = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    f:6,
    g:7,
    h:8,
    i:9,
    j:10,
    k:11,
    l:12,
    m:13,
    n:14,
    o:15,
    p:16,
    q:17,
    r:18,
    s:19,
    t:20,
    u:21,
    v:22,
    w:23,
    x:24,
    y:25,
    z:26
  }
  let highestSum = 0;
  let highestIndex = null;

  string.split(' ').forEach((word,index)=>{
    let sum = word.split('').map((letter)=>{
      return letterConversion[letter];
    }).reduce((a,b)=>{
      return a+b;
    },0)

    if ( sum > highestSum ) {
      highestSum = sum
      highestIndex = index;
    }
  })

  //if highest exists, return highest. else return "";
  return string.split(' ')[highestIndex] ? string.split(' ')[highestIndex] : ""
}
