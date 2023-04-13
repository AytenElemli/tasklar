// 1.Ədədin rəqəmləri cəmini tapın.

// var num=prompt("Ədədi daxil edin:")
// var a,sum=0;

//  while(num>0){
//     a=num%10;
//     sum+=a
//     num=(num-a)/10;
//  }
//  console.log(sum);


 //2.Daxil olan müsbət tam ədədin sadə və ya mürəkkəb olduğunu tapın.
  var num=prompt("Ədədi daxil edin:") 
  for(var i=1; i<10; i++){
  if(num%i==0){
   console.log("Mürəkkəb ədəddir")
   break;
  }
  else{
   console.log("Sadə ədəddir")
   break;
  }
}