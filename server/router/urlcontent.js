const express = require('express')
const router = express.Router()
const {requiredLogin} = require('../middleware/auth')
const url = require('url');
const querystring = require('querystring');
const dateUtils = require('../../utils/date')
const axios = require('axios')

const baseUrl = process.env.API_BASE_URL

router.post('/', requiredLogin, async function (req, res) {
  try {
    const token = req.cookies && req.cookies.auth || ''
    
    const sourceUrl = req.header('Referer')
    const {query} = url.parse(sourceUrl)
  
    const payload = {
      title: `title-${dateUtils.format(new Date().getTime())}`,
      description: '',
      data: querystring.parse(query),
      url: sourceUrl
    }
    const response = await axios({
      method: 'POST',
      url: `${baseUrl}/urlcontents`,
      headers: { Authorization: `Bearer ${token}`},
      data: payload
    });

    return res.json(response.data)
  }
  catch(err){
    console.log(err)
    console.log(err.response)
    console.log(err.message)
    if(err.message.includes('Invalid token')) {
      res.cookie('auth', '', {maxAge: Date.now()})
      return res.redirect('/login')
    }
    console.log('[ERROR] post url content')
    return res.json(err)
  }
})

module.exports = router