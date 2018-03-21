function QuickSort(nums) {
    if(nums.length <=1) return nums;

    const pivot = nums[nums.length - 1];
    const left = [];
    const right = [];

    for (let i=0;i<nums.length-1;i++){
        if(nums[i] < pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i]);
        }
    }

  //  const sortedLeft = QuickSort(left);

  // return [...QuickSort(left),pivot,QuickSort(right)]
  var val = QuickSort(left).concat(pivot,QuickSort(right))

console.log(val);



}

nums = [9,8,2];

QuickSort(nums);