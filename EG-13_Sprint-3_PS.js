// 01. Contains Duplicate

const containsDuplicate = function (nums) {
    const seen = new Set();
    for (const n of nums) {
        if (seen.has(n)) return true;
        seen.add(n);
    }
    return false;
};

// console.log("01:", containsDuplicate([1, 2, 3, 1])); 


// 02. Move Zeroes

const moveZeroes = function (nums) {
    let insertPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }
    for (let i = insertPos; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// const arr02 = [0, 1, 0, 3, 12];
// moveZeroes(arr02);
// console.log("02:", arr02); 

