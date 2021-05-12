const express = require('express')
const cors = require('cors')
const SpotifyWebApi = require('spotify-web-api-node')
const app = express()
app.use(cors())
app.use(express.json())

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
})

app.post('/login', (req, res) => {
    const code = req.body.code

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/callback',
        clientId: 'bbfd329481d24de9978035a63419025b',
        clientSecret: '208d58f993b141d0bf036421a25e9085'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})

app.listen(3001)