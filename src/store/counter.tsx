import { makeAutoObservable } from "mobx";

class Counter {
    count = 500

    constructor() {
        makeAutoObservable<object, never>(this)
    }

    increment = () => {
        this.count = this.count + 1
        console.log(this.count)
    }

    decrement = () => {
        this.count = this.count - 1
        console.log(this.count)
    }
}
export default new Counter()