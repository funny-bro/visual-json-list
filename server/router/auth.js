const express = require('express')
const router = express.Router()
const {requiredLogout} = require('../middleware/auth')
const axios = require('axios')

const baseUrl = process.env.API_BASE_URL

router.post('/', require('../middleware/csrf').verify, requiredLogout, async function (req, res) {
  try {
    console.log(' -=-=-=-= req.body: ,', req.body)
    const {username, password} = req.body
    
    const payload = { identifier: username, password}
    const response = await axios.post(`${baseUrl}/auth/local`, payload)
  
    console.log(response.data)

    const token = response.data.jwt
    const profile = response.data.user
    console.log('token: ', token)
    console.log('profile: ', profile)
    res.cookie('auth', token, {httpOnly: true})
    res.cookie('p', {username: profile.username})
    return res.redirect('/');
  }
  catch(err){
    console.log(err)
    console.log('[ERROR] /api/auth ')
    return res.redirect('/error');
  }
})

module.exports = router