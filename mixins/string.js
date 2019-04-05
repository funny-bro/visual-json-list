
const StringMixin = {
  methods: {
    safelyParseJson: function(data= {}){
      try{
        return JSON.parse(data, null, 4)
      }
      catch(err) {
        console.log('[ERROR] toResponseString: ', data)
        return ''
      }
    },
    retrieveObject: function(dataObj, iterableString = ''){
      if(!iterableString) return dataObj

      const currentString = iterableString.split('.')[0]

      if(currentString.includes('[') && currentString.includes(']')){
        const key = iterableString.split('[')[0]
        const index = currentString.split('[').pop().split(']')[0];
        const indexOfNext = iterableString.indexOf('].')
        const _nextIterableString = iterableString.slice(indexOfNext+2)  // included '.'
        return this.retrieveObject(dataObj[key][index], _nextIterableString)
      }

      const nextIterableString = iterableString.split('.').slice(1).join('.')
      return this.retrieveObject(dataObj[currentString], nextIterableString)

    }
  }
}
export default StringMixin