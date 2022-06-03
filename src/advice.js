window.adviceJS = function () {
    return {
        content: {slip:{advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action.", id:117}},

        getAdvice() {
            fetch('https://api.adviceslip.com/advice', {cache: 'no-cache'})
                .then(response => response.json())
                .then(data => this.content = data)
        }
    }
}