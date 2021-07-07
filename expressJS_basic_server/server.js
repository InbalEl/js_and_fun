const express = require('express')
const portNum = 4343
const userRouter = require('./routers/users/users-router.js')
const hobbiesRouter = require('./routers/hobbies/hobbies-router.js')
const app = express()

// read req body
app.use(express.json());

app.use('/users', userRouter)
app.use('/hobbies', hobbiesRouter)

app.use((req, res) => {
    res.statusCode = 405
    res.send('the url provided is invalid')
})

app.listen(4343, () => {
    console.log(`server ${portNum} is listening!`)
})