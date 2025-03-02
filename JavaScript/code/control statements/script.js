let isLogin=true;
if(isLogin ==false){
    alert("please login to continue");
}
let a=10;
if(a%2==0){
  console.log(`${a} is even`);    
}
else{
    console.log(`${a} is odd`)
}
 /*a person is eleigible to vote if his age is greater than or equal to 18yr. check whether a person is eleigible to vote or not by the age */
 let age = +prompt("enter your agr");
 if(age>=18){
        console.log("you are eligible to vote");
 } else{
        console.log("you are not eligible to vote");
 }

  /*WAP to check and print whether the given person lastname is "pandey" or not */
    let fullName= prompt("enter your full name");
    if(fullName.endsWith("pandey")){
         console.log("yes , they are pandey family");
    } else{
        console.log("no,they are not pandey family");
    }

/*WAP to check whether given name/word is a pallindrome or not */
    // eg; madam,dad,mom,racecar,malayalam,radar,level
   let word= prompt("enter your word");
   let revWord=word.split('').reverse().join('');
   if (word == revWord){
         console.log(word+"is a pallindrome");
   } else{
        console.log(`${word} is not a pallindrome`);
   }     

   /* WAP to check given number is positive or negative*/
    let a1=0;
    if (a>0){
        console.log(`${a} is positive`);
    } else if(a<0){
        console.log(`${a} is negative`);
    } else{
         console.log('it is neither positive nor negative');
    }
     
    //switch 
    /* WAP to print correct answer or not based on user input(choice)*/
    console.log("What is 2+2 ?");
    console.log("1. 3");
    console.log("2. 22");
    console.log("3. 4");
    console.log("4. 5");
    let choice= +prompt("enter your choice");
    switch(ch){
        case 1:
            alert ("Wrong Answer");
            break;
            case 2:
                alert ("wrong answer");
                break;
                case 3:
                    alert ("correct Answer , Congraulations !! you won 5ruppes");
                    break;
                    case 4:
                        alert ("wrong answer");
                        break;
                        default:
                            alert("please enter vaild input");
    }

/*WAP to print name of yhe week based on number of the week using switch */
let ch2= +prompt("enter day of the week");
switch (ch2) {
    case 1:
        alert("Monday");
        break;
        case 2:
            alert("Tuesday");
            break;
            case 3:
                alert("Wednesday");
                break;
                case 4:
                    alert("Thursday");
                    break;
                    case 5:
                        alert("Friday");
                        break;
                        case 6:
                            alert("Saturday");
                            break;
                            case 7:
                                alert("Sunday");
                                break;

                             default:
                                 alert("Choose between 1 to 7");
                                break;
}