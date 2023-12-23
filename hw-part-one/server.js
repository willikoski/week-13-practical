const express = require ('express')
const app = express ()
const PORT = 1999

app.listen(PORT, () => {
    console.log('connected Daddy')
})

// Greeting added
app.get('/greeting/:name', (req, res) => {
    const username = req.params.name
    res.send(`Wow! Hello there, ${username}`)
})

// Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send (`<h1> ${req.params.total * (req.params.tipPercentage * .01)} </h1>`)
})

// Magic 8 Ball

app.get('/magic/:question', (req, res) => {
    const question = req.params.question.replace(/%20/g, ' ')
    const potentialAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    const response = potentialAnswers [Math.floor (Math.random() * potentialAnswers.length)]
    res.send (`Question: ${question} Answer: ${response}`)
})

