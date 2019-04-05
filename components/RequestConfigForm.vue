<template>
  <form action="/" method="get">
    <fieldset class='row'>
      <label class='inputLabel' for='url'> URL</label>
      <input type='text' name='url' :value='initUrl' placeholder="Example: https://api.teleport.org/api/"/>
    </fieldset>
    <fieldset class='row'>
      <label class='inputLabel' for='headers'> Headers</label>
      <textarea :value='initHeaders' placeholder='{"cookie": "somesecrete"}' rows="5" class="form-control" name="headers" data-gramm_editor="false"></textarea>
    </fieldset>
    <fieldset class='row'>
      <label class='inputLabel' for='itemListLocate'> Item List Locating at</label>
      <input type='text' name='itemListLocate' :value='initItemListLocate' placeholder="Example: productList.data"/>
    </fieldset>
    <fieldset class='row'>
      <label class='inputLabel' for='itemImageUrl'> Item Image Locating at</label>
      <input type='text' name='itemImageUrl' :value='initItemImageUrl' placeholder="Example: imageUrl"/>
    </fieldset>
    <fieldset class='row'>
      <label class='inputLabel' for='itemTitle'> Item Title Locating at</label>
      <input type='text' name='itemTitle' :value='initItemTitle' placeholder="Example: imageUrl"/>
    </fieldset>
    <!-- <fieldset class='row'>
      <label class='inputLabel' for='itemFields'> Item Fields</label>
      <input type='text' name='itemFields' :value='initUrl' placeholder="Example: https://api.teleport.org/api/"/>
    </fieldset> -->
    <fieldset class='row'>
      <input type="submit" value="Submit">
    </fieldset>
  </form>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    itemListLocate: {
      type: String,
      default: ''
    },
    itemImageUrl: {
      type: String,
      default: ''
    },
    itemTitle: {
      type: String,
      default: ''
    },
    headers: {
      type: String,
      default: ''
    }
  },
  computed: {
  },
  data: function(){
    const {url, headers, itemListLocate, itemImageUrl = '', itemTitle = ''} = this
    return {
      initUrl: url,
      initHeaders: headers,
      initItemListLocate: itemListLocate,
      initItemImageUrl: itemImageUrl,
      initItemTitle: itemTitle
    }
  }
}
</script>

<style scoped>

form{
  display: flex;
  flex-direction: column;
}
form .row {
  margin-top: 20px;
  border: 0;
}

form .row input{
  width: 100%;
}
form .row textarea{
  width: 100%;
}

form .row input[type=text]{
    width: 100%;
    padding: 10px 12px;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #333;
    border: none;
    border-radius: 2px;
    -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.15);
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.15);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

form .row textarea{
    width: 100%;
    padding: 10px 12px;
    color: #333;
    border: none;
    border-radius: 2px;
    -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.15);
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.15);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

form .row .inputLabel {
    display: block;
    margin: 5px 0;
    font-size: 13px;
    line-height: 1.5em;
    font-weight: 400;
}

form .row input[type=submit]{
  width: 100%;
    color: #202121;
    border-color: #202121;
    font-weight: 500;
    padding: 0 30px;
    height: 40px;
    line-height: 40px;
    position: relative;
    display: inline-block;
    height: 34px;
    padding: 0 23px;
    border: 1px solid;
    border-radius: 2px;
    line-height: 34px;
    font-size: 14px;
    font-weight: 400;
}

</style>
