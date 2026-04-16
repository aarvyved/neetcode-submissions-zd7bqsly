class MinStack {
    constructor() {
        this.stack = [];
        this.minArr = []
        this.length = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.length++;
        // set min array element
        if(this.minArr.length > 0){
            let min = Math.min(this.minArr[this.minArr.length - 1], val);
            this.minArr.push(min);
        } else {
            this.minArr.push(val);
        }

    }

    /**
     * @return {void}
     */
    pop() {
        let topEl = this.stack[this.length - 1];
        this.stack.pop();
        this.length--;
        this.minArr.pop();
    }

    /**
     * @return {number}
     */
    top() {
        let topEl = this.stack[this.length - 1];
        return this.length ? this.stack[this.length-1] : "";
    }

    /**
     * @return {number}
     */
    getMin() {
        let minLength = this.minArr.length;
        return this.minArr[minLength - 1];
    }
}
