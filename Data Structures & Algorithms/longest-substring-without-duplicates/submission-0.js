class Solution {
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        let hash = {}; // We will store the last seen index of each character
        let maxLen = 0;

        while (r < s.length) {
            let currChar = s[r];

            // If we've seen this character before AND it's inside our current window
            if (currChar in hash && hash[currChar] >= l) {
                // Move the left pointer to just after the last time we saw this char
                l = hash[currChar] + 1;
            }

            // Record/Update the position of the current character
            hash[currChar] = r;

            // Calculate current window size and update maxLen
            maxLen = Math.max(maxLen, r - l + 1);

            // Always move the right pointer forward
            r++;
        }

        return maxLen;
    }
}