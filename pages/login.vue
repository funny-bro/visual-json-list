<template>
  <div class='limiter'>
    <div  class="container">
      <section class="loginSection">
          <form action="/api/auth" method='POST'>
            <h1 class="title">
              Hello Developer
            </h1>
            
            <input
              name="username"
              type='text'
            />
            <input
              name="password"
              type='password'
            />
            <input
              name="csrf"
              type='hidden'
              :value='csrf'
            />

            <button type="submit" > Login </button>
          </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  asyncData ({req,res}) {
    const t = req.csrf
    const secret = req.csrfSecret
    const csrf = t.create(secret)
    return { csrf }
  },
  components: {
  }
}
</script>

<style>
.limiter{
  width: 100%;
  margin: 0 auto;
}
.container {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #f2f2f2;
}
.loginSection {
    width: 390px;
    background: #fff;
    border-radius: 2px;
    overflow: hidden;
    padding: 77px 55px 33px 55px;
    box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
}

.loginSection form{
    width: 100%;
    display: flex;
    flex-direction: column;
}

h1.title {
    display: block;
    font-family: Poppins-Bold;
    font-size: 30px;
    color: #4c4c4c;
    line-height: 1.2;
    text-align: center;
}

.loginSection form input{
    position: relative;
    margin: 0;
    padding: 6px 10px;
    height: 40px;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #cfd2d5;
    letter-spacing: normal;
    font-size: .94118em;
    z-index: 1;

    margin-top: 30px;
}

.loginSection form button{
    margin: 30px 0;
    background: #4c4c4c;
    border-color: #4c4c4c;

    border: 2px solid hsla(0,0%,0%,0);
    border-radius: 2px;
    box-sizing: border-box;
    color: #fff;
    display: inline-block;
    height: 42px;
    line-height: 1;
    outline: 0;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: none;
    vertical-align: middle;
    white-space: nowrap;
    zoom: 1;
    font-size: .94118em;
}



</style>
