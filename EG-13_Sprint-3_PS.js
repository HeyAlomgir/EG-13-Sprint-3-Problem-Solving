// 01. Contains Duplicate

const containsDuplicate = function(nums) {
    const seen = new Set();
    for (const n of nums) {
        if (seen.has(n)) return true;
        seen.add(n);
    }
    return false;
};
 
// console.log("01:", containsDuplicate([1, 2, 3, 1])); 