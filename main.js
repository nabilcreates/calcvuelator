var app = new Vue({
    el: ".app",
    data() {
        return {
            number: "",
            mode: 'plus',
            previous: "",
            answer: "",
        }
    },

    methods: {
        concat(no) {
            this.number = this.number + no;
        },

        setMode(mode) {
            this.previous = this.number;
            this.mode = mode;
            this.number = ""
        },

        empty(){
            this.number = ""
        },
        
        evaluate() {

            console.log(Number(this.number))
            console.log(Number(this.previous))

            console.log(this.mode)
            
            if (this.mode == 'plus') {
                console.log('plus')
                this.answer = Number(this.previous) + Number(this.number);
                console.log(this.answer)
            } else if (this.mode == 'minus') {
                console.log('minus')
                this.answer = Number(this.previous) - Number(this.number);
                console.log(this.answer)
            } else if (this.mode == 'times') {
                console.log('times')
                this.answer = Number(this.previous) * Number(this.number);
                console.log(this.answer)
            } else if (this.mode == 'divide') {
                console.log('divide')
                this.answer = Number(this.previous) / Number(this.number);
                console.log(this.answer)
            }

        }
    }
})