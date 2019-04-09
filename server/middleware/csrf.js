const csrf = new require('csrf')()
const csrfSecret = csrf.secretSync()

const init = (req,res,next)=>{
  req.csrf = csrf
  req.csrfSecret =csrfSecret
  next()
}

const verify = (req,res,next)=>{
  const t = req.csrf
  const secret = req.csrfSecret
  const _csrf = req.body.csrf
  if (!t.verify(secret, _csrf)) {
    console.log('invalid csrf')
    return res.redirect('/error')
  }

  return next()
}

module.exports = {init, verify}
