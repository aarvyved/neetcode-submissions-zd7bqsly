class LinkedList {
    constructor() {
        this.list = [];
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        return index > this.list.length - 1 ? -1: this.list[index];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        this.list = [ val, ...this.list];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.list = [ ...this.list, val ];
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if(index > this.list.length - 1){
            return false;
        }

        this.list.splice(index, 1)
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        return this.list;
    }
}
