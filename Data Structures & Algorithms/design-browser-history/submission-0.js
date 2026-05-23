class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.history = [homepage];
        this.currentIndex = 0;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.history.length = this.currentIndex + 1;
        this.history.push(url);
        this.currentIndex++;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        this.currentIndex = Math.max(0, this.currentIndex - steps);
        return this.history[this.currentIndex];
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        this.currentIndex = Math.min(this.history.length - 1, this.currentIndex + steps);
        return this.history[this.currentIndex];
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
