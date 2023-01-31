class MinStack {
    constructor(){
        this.stack=[];
        this.MinStack=[];
    }
    push(val){
        if(!this.stack.length){
            this.stack.push(val);
            this.MinStack.push(val);
        }
        else {
            this.stack.push(val);
            this.MinStack.push(Math.min(this.MinStack[this.MinStack.length - 1],val))
        }
    }
    pop(){
        if(!this.stack.length) return null;
        this.MinStack.pop();
        return this.stack.pop();
    }
    top(){
        return this.stack[this.stack.length - 1];
    }
    getMin(){
        return this.MinStack[this.MinStack.length - 1];
    }
}

