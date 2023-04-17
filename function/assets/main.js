//cutlerin cemini tap.
// function hasNum(value) {
//     var sum=0;
//     for (var i = 0; i < value.length; i++){
//         if (value[i]%2==0){
//             sum=sum+(value[i]);
//         }
//     }
//     return sum;
// }
//       var arry=[12, 344, 435, 567, 78, 8, 98, 234];
//       var a=hasNum(arry);
//       console.log(a);


 //teklerin hasilini tap.
function hasNum(value) {
        var multi=1;
        for (var i = 0; i < value.length; i++){
            if (value[i]%2==1){
                multi=multi*value[i];
            }
        }
        return multi;
    }
          var arry=[12, 344, 435, 567, 78, 8, 98, 234];
          var a=hasNum(arry);
          console.log(a);