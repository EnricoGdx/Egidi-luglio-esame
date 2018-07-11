const express = require('express'),
const bodyParser = require('body-parser');
const cup = express.Router()

var uuid = require('uuid-v4');

const deliveredteam = []
const deliveredmatch = []


cup.get('/', function (req, res) {

    res.json(deliveredteam + deliveredmatch)

})

cup.post('/team', function (req, res) {

    const newteam = req.body
    newteam.teamID = uuid()
    deliveredcup.push(newteam)
    res.json(newteam)
})

cup.get('/team:teamID', function (req, res) {

    const teamID = req.params.teamID
    const i = deliveredcup.findIndex(item => {return item.teamID === teamID})
    if (i==-1) res.sendStatus(404)
    else {
        res.status=200
        res.json(deliveredcup[i])
    }
})

cup.put('/team:teamID', function (req, res) {

    const teamID = req.params.teamID
    const i = deliveredcup.findIndex(item => {return item.teamID === teamID})
    deliveredcup[i] = req.body
    deliveredcup[i].teamID = teamID
    res.json(deliveredcup[i])
})

cup.post('/match', function (req, res) {

    const newmatch = req.body
    newmatch.teamID = uuid()
    deliveredcup.push(newmatch)
    res.json(newmatch)
})

cup.get('/match:matchID', function (req, res) {

    const matchID = req.params.matchID
    const i = deliveredcup.findIndex(item => {return item.matchID === matchID})
    if (i==-1) res.sendStatus(404)
    else {
        res.status=200
        res.json(deliveredcup[i])
    }
})

cup.put('/match:matchID', function (req, res) {

    const matchID = req.params.teamID
    const i = deliveredcup.findIndex(item => {return item.matchID === matchID})
    deliveredcup[i] = req.body
    deliveredcup[i].matchID = matchID
    res.json(deliveredcup[i])
})


module.exports = cup