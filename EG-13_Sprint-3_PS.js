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



// 03. Valid Anagram

const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const counts = {};
    for (const ch of s) {
        counts[ch] = (counts[ch] || 0) + 1;
    }
    for (const ch of t) {
        if (!counts[ch]) return false;
        counts[ch]--;
    }
    return true;
};

// console.log("03:", isAnagram("anagram", "nagaram"))





// 04. Ransom Note

const canConstruct = function (ransomNote, magazine) {
    const counts = {};
    for (const ch of magazine) {
        counts[ch] = (counts[ch] || 0) + 1;
    }
    for (const ch of ransomNote) {
        if (!counts[ch]) return false;
        counts[ch]--;
    }
    return true;
};

// console.log("04:", canConstruct("aa", "aab"));




// 05. Majority Element

const majorityElement = function (nums) {
    let count = 0;
    let candidate = null;
    for (const n of nums) {
        if (count === 0) {
            candidate = n;
        }
        count += (n === candidate) ? 1 : -1;
    }
    return candidate;
};

// console.log("05:", majorityElement([2, 2, 1, 1, 1, 2, 2]));




// 3Sum


const threeSum = function (nums) {
    const res = [];
    const sorted = [...nums].sort((a, b) => a - b);
    const n = sorted.length;

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;
        let left = i + 1;
        let right = n - 1;
        while (left < right) {
            const sum = sorted[i] + sorted[left] + sorted[right];
            if (sum === 0) {
                res.push([sorted[i], sorted[left], sorted[right]]);
                while (left < right && sorted[left] === sorted[left + 1]) left++;
                while (left < right && sorted[right] === sorted[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return res;
};

// console.log("06:", threeSum([-1, 0, 1, 2, -1, -4]));


//  07. Subarray Sum Equals K

const subarraySum = function(nums, k) {
    const prefixCounts = new Map();
    prefixCounts.set(0, 1);
    let sum = 0;
    let count = 0;
 
    for (const n of nums) {
        sum += n;
        const needed = sum - k;
        if (prefixCounts.has(needed)) {
            count += prefixCounts.get(needed);
        }
        prefixCounts.set(sum, (prefixCounts.get(sum) || 0) + 1);
    }
    return count;
};
 
// console.log("07:", subarraySum([1, 1, 1], 2)); 





//  08. Top K Frequent Elements



const topKFrequent = function(nums, k) {
    const freq = new Map();
    for (const n of nums) {
        freq.set(n, (freq.get(n) || 0) + 1);
    }
 
    const buckets = new Array(nums.length + 1).fill(null).map(() => []);
    for (const [num, count] of freq.entries()) {
        buckets[count].push(num);
    }
 
    const res = [];
    for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
        for (const num of buckets[i]) {
            res.push(num);
            if (res.length === k) break;
        }
    }
    return res;
};
 
// console.log("08:", topKFrequent([1, 1, 1, 2, 2, 3], 2));