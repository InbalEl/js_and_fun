const express = require('express')
const router = express.Router()
const {usersData, hobbiesData} = require('../../data-storage.js')

let hobbyId = 0

router.post('/', (req, res) => {
    newHobbyId = hobbyId++
    hobbiesData[newHobbyId] = req.body
    res.send(newHobbyId.toString())
})

router.get('/',(req, res) => {
    res.send(JSON.stringify(hobbiesData))
})

router.patch('/:id(\d+)',(req, res) => {
    hobbiesData[id] = req.body
    res.send('hobby name updated!')
})

router.use((req, res) => {
    res.statusCode = 405
    res.send('the url provided is invalid')
})

module.exports = router