<template>
  <div>
    <header>
      <div class="navbar-header">
        <h1>
          <a class="navbar-brand" href="#">
            JSON Formatter &amp; Validator
          </a>
        </h1>
      </div>
    </header>
    <form action="/api/urlcontent" method="post">
      <input class="saveButton" type='submit' value='Save'>
    </form>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
header{
  padding: 10px 0;
  background-color: #e7e7e7;
  padding-left: 20px;
}

header a {
  text-decoration: none;
  color: #4c4c4c;
  font-size: 25px;
}

.saveButton {
  position: absolute;
  text-decoration: none;
  right: 0;
  padding: 5px 10px;
  border: 1px solid black;
  color: black;
  margin: 2px;
}
</style>
