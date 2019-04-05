import StingMixins from '@/mixins/string.js'

describe('safelyParseJson', () => {
  test('Should return json object, when given good json string', () => {
    const jsonString = JSON.stringify({id: 'foo'})
    const result = StingMixins.methods.safelyParseJson(jsonString)

    expect(result.id).toBe('foo')
  })

  test('Should return "", when given bad string', () => {
    const jsonString = 'foo'
    const result = StingMixins.methods.safelyParseJson(jsonString)

    expect(result).toBe('')
  })
})

describe('retrieveObject', () => {
  test('Should return json object, when given good json string', () => {
    const json = { sub1: { sub2: 'foo'}}
    const result = StingMixins.methods.retrieveObject(json, 'sub1.sub2')
    expect(result).toBe('foo')
  })
})


describe('retrieveObject: array', () => {
  test('Should return json object, when given sub1[0].sub2', () => {
    const json = { sub1: [{sub2: 'foo'}]}
    const result = StingMixins.methods.retrieveObject(json, 'sub1[0].sub2')
    expect(result).toBe('foo')
  })

  test('Should return json object, when given sub1.sub2[0].sub3', () => {
    const json = { sub1: { sub2: [{sub3: 'foo'}]}}
    const result = StingMixins.methods.retrieveObject(json, 'sub1.sub2[0].sub3')
    expect(result).toBe('foo')
  })

  test('Should return json object, when given sub1[0].sub2[0].sub3', () => {
    const json = { sub1: [{ sub2: [{sub3: 'foo'}]}]}
    const result = StingMixins.methods.retrieveObject(json, 'sub1[0].sub2[0].sub3')
    expect(result).toBe('foo')
  })
})