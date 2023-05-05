const Array = [1,3,6,7,9,10,14,18,19];

//using the method filter()
const selected1 = Array.filter(num => num % 2 === 0);
console.log(selected1);

//using only creating array
let selected2 = [];
for(i=0,j=0;i<Array.length;i++){
    let selectedNum = Array[i];
    if(selectedNum % 2 === 0){
        selected2[j]=selectedNum;
        j++;
    }

}
console.log(selected2);