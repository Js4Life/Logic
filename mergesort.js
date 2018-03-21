function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }
    var mid = Math.floor(arr.length/2);
    var left = arr.slice(0,mid);
    var right = arr.slice(mid);
    merge(mergeSort(left),mergeSort(right));
}

// mergeSort(arr);

// function sort(left,right) {
//     var leftIndex = 0;
//     var rightIndex = 0;
//     var results = [];

//     while(leftIndex < left.length && rightIndex < right.length) {
//         if(left[leftIndex] < right[rightIndex]) {
//             results.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             results.push(right[rightIndex])
//             rightIndex++
//         }
//     }
//     return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

function merge(left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
  
    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft])
        indexLeft++
      } else {
        result.push(right[indexRight])
        indexRight++
      }
    }
  
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }

  
  const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
  console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]