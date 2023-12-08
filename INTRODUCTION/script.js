
let findSum = (arr) =>{
    let sum=0;
    for(i=0;i<arr.length;i++)
    sum+=arr[i];
   
    return sum;
    
}

arr =[1,2,3,6,5];
console.log(findSum(arr));

let areaOfCircle = r =>  Math.PI*r*r

console.log(areaOfCircle(5).toFixed(2));