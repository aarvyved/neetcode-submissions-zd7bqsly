class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let includedStr = {};
        let resArr = [];
        for(let i=0; i < strs.length; i++){
            let item = strs[i];
            let groupArr = [];
            if(!(item in includedStr)){
                // includedStr[item] = 1;
                groupArr.push(item);
            
            
            console.log(groupArr);
            for(let j = i+1; j < strs.length; j++){
                const compareItem = strs[j];
                if((item.length == compareItem.length)){
                    const sortStr1 = item?.split('').sort().join('');
                    const sortStr2 = compareItem.split('').sort().join('');
                    if(sortStr1 === sortStr2){
                        includedStr[compareItem] = 1;
                        // if(compareItem.length){
                        //     includedStr[compareItem] = 1;
                        // }
                        groupArr.push(compareItem);
                    }
                }
            }
            
            resArr.push(groupArr);
            }
            
        }

        return resArr;
    }
}
