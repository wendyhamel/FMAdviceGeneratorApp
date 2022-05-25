window.advice = function () {
    return {
        adviceStartSlip : {slip: {advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action.", id:117}},
        adviceRandom : 'https://api.adviceslip.com/advice',

        get randomAdvice(url) {
            return response = await fetch(url, {cache: 'no-cache'}).then(response => response.json()).then(data => console.log(data));
        },
    }
}