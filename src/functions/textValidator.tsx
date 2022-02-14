import { ITextValidatorProps } from '../types'

const textValidator = ({ theText, maxLength }: ITextValidatorProps) => {
  // check if there is text content and the maximaum length is not zero
  if (theText && maxLength > 0) {
    // check if text length is same as needed
    if (theText.length > maxLength) {
      // reduce text length to the needed length and append '...' at the end
      theText = `${theText.slice(0, maxLength)}...`
    }
    return theText
  }
  return ''
}

export { textValidator }
