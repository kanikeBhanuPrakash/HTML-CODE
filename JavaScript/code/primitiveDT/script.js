let a=25.1759;
console.log(a);
console.log(typeof a)
console.log(a.toFixed(2))//fixed no of decimal digits
console.log(a.toPrecision(3))//fixed no of digits
a=25;
console.log(a.toString(2))

//math methods
 console.log(Math.max(5,8,2,5,3));
 console.log(Math.min(5,8,2,5,3));
 console.log(Math.sqrt(16));
 console.log(Math.cbrt(27));
 console.log(Math.ceil(2.4));//3
 console.log(Math.floor(2.4));//3
 console.log(Math.round(3.14));
 console.log(Math.random())
 console.log(Math.pow(2,3),2**3) //8
 console.log(Math.floor(Math.random()*10000))

 //String
  let str='raj';
  let str1="raj";
  console.log(typeof str,typeof str1);
  let quote="the Gandi said,`Good night`"
  let time='the time is 5 0\`clock`';
  let cost=25,quantity=4;
  console.log('the total of ${quantity} apple of each worth ${cost} is ${cost*quantity}')

  let s="prasad";
  console.log(s.length)//6
  console.log(s.charAt(1))
  console.log(s.indexOf('a'));//2
  console.log(s.lastIndexOf('a'))//4
  console.log(s.toUpperCase())
  console.log(s)//original string won't be changed because in JS,strings are immutable.
  console.log(s.toLowerCase())
  console.log(s.startsWith("pa"))
  console.log(s.endsWith("ad"))
  console.log(s.replaceAll('a','k'));
  let s1="Js is so easy";
  console.log(s.split('a'))
  s1="I love Javascript"
  console.log(s1.slice(7,11));
  s=" prasad "
  console.log(s.trim())
  