var search = function(nums,target)
{
    let low =0;
    let high = nums.lenghth - 1;


    while(low <= high)
    {
        let mid =Math.floor((low+high)/2);

        if(nums[mid] === target)
        {
            return mid;
            
        }
        if(nums[mid] > target)
        {
            high = mid - 1;

        }
        else{
            low=mid+1;

        }
    }
    return -1;
};