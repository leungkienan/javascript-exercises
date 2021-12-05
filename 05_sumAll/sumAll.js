const sumAll = function(min, max) {

    // function add(acc,a){
    //     return acc + a
    // }

    // // console.log("this is min: "+min)
    // // console.log("this is max: "+max)
    // if(min<0 || max<0 || min==NaN || max==NaN){
    //     return 'ERROR'
    // } else if(min>max){

    //     let maxSum=max;
    //     maxArr=[]
    //     for(let i=0; i<min; i++){
    //         maxArr.push(maxSum)
    //         maxSum = max+1
    //         // console.log("this is max sum: "+maxSum)
    //     }
    //     let sum = maxArr.reduce(add, 0)
    //     return sum;
    // } else{
    //     let minSum=min;
    //     let minArr =[]
    //     for(let n=0; n<max; n++){
    //         minArr.push(minSum)
    //         minSum=min+1;
    //         // console.log("this is min sum: "+minSum)
    //     }
    //     let sum = minArr.reduce(add, 0)
    //     console.log("sum is: "+sum)
    //     console.log("minArr is: "+minArr)
    //     return sum
    //  }

    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
      sum += i;
    }
    return sum;


};

// Do not edit below this line
module.exports = sumAll;
