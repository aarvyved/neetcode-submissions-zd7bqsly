class Solution {
    /**
     * @param {Pair[]}
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        let stateArr = [];
        for (let i = 0; i < pairs.length; i++) {
            let j = i - 1;

            while (j >= 0 && pairs[j + 1].key < pairs[j].key) {
                let tmp = pairs[j + 1];
                pairs[j + 1] = pairs[j];
                pairs[j] = tmp;
                j--;
            }

            stateArr.push([...pairs]);
        }
        return stateArr;
    }
}
