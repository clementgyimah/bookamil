import { textValidator } from '../../../functions'

describe('text validator', () => {
  test('empty text content', () => {
    const theText = ''
    const maxLength = 20
    const emptyText = textValidator({
      theText,
      maxLength,
    })
    expect(emptyText).toEqual('')
  })
  test('text content available', () => {
    const theText = 'Hello, welcome to Bookamil. The number one digital book library'
    let maxLength = 0
    const check1 = textValidator({
      theText,
      maxLength,
    })
    maxLength = theText.length
    const check2 = textValidator({
      theText,
      maxLength,
    })
    maxLength = theText.length + 10
    const check3 = textValidator({
      theText,
      maxLength,
    })
    maxLength = theText.length - 4
    const check4 = textValidator({
      theText,
      maxLength,
    })
    expect(check1).toEqual('')
    expect(check2).toEqual(theText)
    expect(check3).toEqual(theText)
    expect(check4).toContain('...')
  })
})
