let arr =  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let max = Number.NEGATIVE_INFINITY
let currentSum = 0
let start = 0
let end = 0 

for (i=0; i<arr.length; i++){
currentSum = Math.max(arr[i], currentSum + arr[i])
if(currentSum> max){
    max = currentSum
    start = i 
    end = i +1
}
}

 console.log(arr.slice(start,end));