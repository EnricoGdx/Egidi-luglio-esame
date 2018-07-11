var express = require('express');
var cup = express.Router();

var uuid = require('uuid-v4');

var deliveredteams = []
var deliveredmatches = []


cup.get('/', function (req, res) {

    res.json(deliveredteams + deliveredmatches)

})

cup.post('/teams', function (req, res) {

    var name = req.body.name
    var is_still_in = req.body.is_still_in
    var newteam = {

        id: uuid(),
        name: name,
        is_still_in: is_still_in,
        matches: []
    }

    deliveredteams.push(newteam)
    res.json(newteam)
})

cup.get('/teams/:teamsID', function (req, res) {

    const teamsID = req.params.teamsID
    const i = deliveredteams.findIndex(item => {return item.teamsID === teamsID})
    if (i==-1) res.sendStatus(404)
    else {
        res.status=200
        res.json(deliveredteams[i])
    }
})

cup.put('/teams/:teamsID', function (req, res) {

    const teamsID = req.params.teamsID
    const i = deliveredteams.findIndex(item => {return item.teamsID === teamsID})
    deliveredcup[i] = req.body
    deliveredcup[i].teamsID = teamsID
    res.json(deliveredteams[i])
})

cup.post('/match', function (req, res) {

    const team = req.body.team
    const opponent = req.body.opponent
    const outcome = req.body.outcome
    var newmatch = {
        team: team,
        opponent: opponent,
        outcome: outcome
    }
    deliveredmatches.push(newmatch)
    const i = deliveredteams.findIndex(item => {return item.teamsID === teamsID})
    deliveredteams[i].matches.push(newmatch)
    const m = deliveredteams.findIndex(item => {return item.name === team})
    deliveredteams[m].matches.push(deliveredmatches[i])
    res.json(newmatch)
})

cup.get('/match/:team/:opponent', function (req, res) {

    const team = req.params.team
    const opponent = req.params.opponent
    const i = deliveredmatches.findIndex(item => {return item.team === team && item.opponent === opponent})
    if (i==-1) res.sendStatus(404)
    else {
        res.status=200
        res.json(deliveredmatches[i])
    }
})

cup.put('/match/:team/:opponent', function (req, res) {

    const team = req.params.team
    const opponent = req.params.opponent
    const i = deliveredmatches.findIndex(item => {return item.team === team && item.opponent === opponent})
    deliveredmathces[i] = req.body
    deliveredmathces[i].matchID = matchID
    const m = deliveredteams.findIndex(item => {return item.name === team})
    const n = deliveredteams[m].matches.findIndex(item => {return item.team === team && item.opponent === opponent})
    deliveredteams[m].matches[n] = deliveredmatches[i]
    res.json(deliveredmatches[i])
})


module.exports = cup