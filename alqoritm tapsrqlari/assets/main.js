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
// function findIndex(str, chr){
//         for(let i = 0; i < str.length; i++){
//             if(str[i]==chr){
//                return i;
//             }
//         }
//         return -1;
//     }
//     // console.log(findIndex("salam", "l"));
//     console.log(findIndex(prompt(), prompt()));



//19 aprel 2023.
// 1.Ədədlərdən ibarət array verilib. Arrayın ən kiçik elementini geri qaytaran funksiyanı yazın.
// function findMin(arry) {
//     var min = arry[0];
//     for (let i = 1; i < arry.length; i++) {
//         if (arry[i] < min) {
//             min = arry[i];
//         }
//     }
//     return min;
// }
//       var array = [23, 11, 19, 34, -12, 551];
//     console.log("Arrayin en kicik elementi :" + findMin([23, 11, 19, 34, 551])); 
//ve ya console.log("Arrayin en kicik elementi :" + fimdMin(array)); 



// 1-in maksimumu.
// function findMax(arry){
//     var max=arry[0];
//     for(let i=1; i<arry.length; i++){
//         if(arry[i]>max){
//             max=arry[i];
//         }
//     }
//     return max;
// }
// var array=[23, 11, 19, 34, -12, 551];
// console.log("Arrayin en boyuk elementi :" + findMax(array));


//2.cut yerde(index) duranlarin cemini tapin.
// function findSum(arry){
//         var sum=0;
//         for(let i=0; i<arry.length; i+=2){

//             sum+=arry[i];

//         }
//         return sum;
//     }
//     var array=[23, 11, 19, 34, -12, 551];
//     console.log(findSum(array));


//3.Tek yerde dayanan en balaca ededle, cut yerde dayanan en boyuk ededle cemi.
// function findSum(arry){
//     var sum=0;
//     for(let i=1; i<arry.length; i+=2){
//         var min=arry[1];
//         if(arry[i]<min){
//             min=arry[i];
//             // sum+=arry[i];
//         }
//     }
//       return min;
//     for(let  i=0; i<arry.length; i+=2){
//         var max=arry[0];
//         if(arry>max){
//             max=arry[i];
//         }
//     }
// }
// var array=[23, 11, 19, 34, -12, 551, 13];
// console.log(findSum(array));









//3.Mellimin yazdigi.
// function findSum(arry){
//     var min=arry[1];
//     var max=arry[0];
//     for (let i=2; i<arry.length; i++){
//         if (i%2==0 && arry[i]>max){
//             max=arry[i];
//         }
//         else if(i%2==1 && arry[i]<min){
//             min=arry[i];
//         }
//     }
//      console.log(min+max);
//     // ve ya return min+max

// }
//  findSum([23, 11, 19, 34, -12, 551, 13]);
// //ve ya console.log(findSum([23, 11, 19, 34, -12, 551, 13]));



//4.while ile yazmaq.
//Verilen ededin 2nin quvveti olub olmadigini yoxlayin, eger 2nin quvvetidirse ekrana cixaran funksiya yazin.
// function powerOfTwo(num) {
//     var newNum = num;
//     var count = 0;

//     while (num % 2 === 0) {
//         num = num / 2;
//         count++;
//     }
//     if (num === 1) {
//         console.log(newNum + " 2nin " + count + " quvvetidir.")
//     }
//     else{
//         console.log(newNum + " 2nin quvveti deyil.")
//     }
// }
// powerOfTwo(64);
//ve ya 
// var num=Number(promt("eded daxil edin:"));


//4.for-la yazmaq.
 function powerOfTwo(num){
    //var count=0;
    var check=false;
    for(let i=1; i<=num; i*=2){
        if(i===)
    }
 }








