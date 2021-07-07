const express = require('express')
const router = express.Router()
const {usersData, hobbiesData} = require('../../data-storage.js')

let userId = 0

router.get('/',(req, res) => {
    res.send(JSON.stringify(usersData))
})

router.patch('/:userId(\d+)/:hobbyId(\d+)', (req, res) => {
    usersData[userId]["hobbies"].push(hobbiesData[hobbyId])
    res.send('Hobby added to user!')
})

router.get('/:id(\d+)',(req, res) => {
    res.send(JSON.stringify(usersData[id]))
})

router.post('/', (req, res) => {
    newUserId = userId++
    newUserId["hobbies"] = []
    usersData[newUserId] = req.body
    res.send(newUserId.toString())
})

router.use((req, res) => {
    res.statusCode = 405
    res.send('the url provided is invalid')
})

module.exports = router