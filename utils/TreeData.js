const TYPE_OBJECT = 'object'
const TYPE_ARRAY = 'array'

const getType = (data) => {
  return (typeof data === TYPE_OBJECT && Array.isArray(data))? TYPE_ARRAY:
    typeof data
}

export default class TreeData {
  constructor (rawData, parent = null, config = {}) {
    const type = getType(rawData)
    const {level = 0, key = '', index = ''} = config 
    this.currentKey = key
    this.currentIndex = index
    this.level = level
    this.parent = parent
    this.type = type
    this.keyValList = []
    this.objectChildren = []
    this.arrayChildren = []
    this.rawData = rawData
    this.locate = this.initLocate()

    if(!rawData) return

    if(type === TYPE_OBJECT) {
      this.parserObject(rawData)
    }

    if(type === TYPE_ARRAY) {
      this.parserArray(rawData)
    }
  }

  initLocate () {
    const {parent, type, currentIndex, currentKey} = this

    if(!parent) return ''

    if(currentKey) return `${parent.locate}.${currentKey}`

    if(currentIndex || currentIndex === 0) return `${parent.locate}[${currentIndex}]`

    return ''
  }

  parserObject (dataObject = {}) {
    const parent = this
    const level = this.level+1

    for(const key of Object.keys(dataObject)) {
      if(typeof dataObject[key] !== TYPE_OBJECT) {
        const type = getType(dataObject[key])
        this.keyValList.push({key, value: dataObject[key], type})
      }

      if(getType(dataObject[key]) === TYPE_OBJECT) {
        this.objectChildren.push({
          key,
          value: new TreeData(dataObject[key], parent, {level, key})
        })
      }

      if(getType(dataObject[key]) === TYPE_ARRAY) {
        this.arrayChildren.push( new TreeData(dataObject[key], parent, {level, key}))
      }
    }
  }

  parserArray (dataArray = []) {
    const parent = this
    const level = this.level+1

    for( let i =0 ; i<dataArray.length; i++){
      const item = dataArray[i]
      this.arrayChildren.push( new TreeData(item, parent, {level, index: i}))
    }
  }
}