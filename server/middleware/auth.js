const Strapi = require('strapi-sdk-javascript').default

const requiredLogin = (req,res,next)=>{
  const {auth} = req.cookies
  
  if(!auth) return res.redirect('/login')

  return next()
}

const requiredLogout = (req,res,next)=>{
  const {auth} = req.cookies
  
  if(!auth) return next()

  return redirect('/error')
}

module.exports = {requiredLogin, requiredLogout}
