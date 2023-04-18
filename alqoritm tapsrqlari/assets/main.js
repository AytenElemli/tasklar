//1.cevrenin sahesini tapan funksiya qurun.
// function areaOfCircle(radius){
//     return 3*radius*radius
// }
// console.log(areaOfCircle(prompt()));

//1cinin anonim yazilisi.
// var areaOfCircle = r =>3*r*r;
// console.log(areaOfCircle(prompt()));



//2. Duzbucaqlinin sahesi(s=a*b).
// function areaOfRectangular(a,b){
//     var a;
//     var b;
//     return a*b
// }
// console.log(areaOfRectangular(prompt(), prompt()))



//3.Duzbucaqli paralelipipedin tam sethinin sahesi-S=2*(a*b+a*c+b*c).
//  function areaOfRectangular(a,b,c){
//     var a;
//     var b;
//     var c;
//     return 2*(a*b+a*c+b*c)
//  }
//  console.log(areaOfRectangular(prompt(), prompt(), prompt()))



//4,Ucbucaqlinin daxiline cekilmis cevrenin sahesi-S=p*r; p=(a+b+c)/2.
// function areaOfTriangular(a,b,c,r){
//     var p=(Number(a)+ Number(b)+ Number(c))/2;
//     // var s;
//     return s=p*r
// }
// console.log(areaOfTriangular(prompt(), prompt(), prompt(), prompt()))


//5.Proqram ikirəqəmli ədədi oxuyur və ədədin hər bir rəqəmini arada boşluq olmaqla ekrana verir.
//(10-99 arası hər hansı bir natural ədəd)
//  function num(a){
//     var b;
//     if(9<a && a<100){
//         return b=((a-(a%10))/10)+' '+(a%10);
//     }
//  }
//  console.log(num(prompt()))


//6.Mənfi olmayan tam n ədədinin rəqəmlərinin sayını hesablayın.
// function countOfNumbers(num){
// if (num >= 0) {
//     say = 1;
//     while (num > 9) {
//         var teklik = num % 10;
//         num = (num - teklik) / 10;
//         say++;
//     }
//     console.log(say);
// }
// else{
//     console.log("Wrong input");
// }
// }
// countOfNumbers(prompt())


//7.Verilmis string deyerinde verilmis char-in hansi index-de yerlesdiyini tapib qaytaran funksiya qurun. olmasa -1 olmalidir.
function findIndex(str, chr){
        for(let i = 0; i < str.length; i++){
            if(str[i]==chr){
               return i;
            }
        }
        return -1;
    }
    // console.log(findIndex("salam", "l"));
    console.log(findIndex(prompt(), prompt()));
 
