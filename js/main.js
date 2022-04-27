// * Реализуйте новый, собственный метод массива trippleOdd (через прототип), 
// * который будет умножать на 3 каждый элемент в переданном массиве, 
// * и оставлять только НЕЧЕТНЫЕ числа.
const myArray = [1, 2, 3, 4, 5];
// * Где myArray это [3, 9, 15]; 
// */

Array.prototype.trippleOdd = function() {
  const res = [];     
   for(let i = 0;  this.length<8; i++) 
   {         
       this[i] *=3         
       if(this[i] % 2 !== 0) 
       {             
           res.push(this[i])         
       }                  
   }          
   return res 
}
    console.log(myArray);
   console.log(myArray.trippleOdd());

   const arrSecond = [3, 9, 15];

   Array.prototype.trippleOddSecond = function(){
       const result = [];
       for(let i = 0; this.length<=3; i++)
       {
        this[i]*=3
        if(this[i] % 2 !== 0){
            result.push(this[i])
        }
       }
       return result
   }
   console.log(arrSecond);
   console.log(arrSecond.trippleOddSecond());
   


   let str = 'i am in the easycode';
    let res = '';

for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === ' ') {
        res += str[i].toUpperCase();
        console.log(str[i])
    } else {
        res += str[i];
        console.log(str[i])
    }
}

    console.log(res);