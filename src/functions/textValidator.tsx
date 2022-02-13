import { ITextValidatorProps } from '../types'

const textValidator = ({ theText, maxLength }: ITextValidatorProps) => {
  if (theText && maxLength > 0) {
    if (theText.length > maxLength) {
      theText = `${theText.slice(0, maxLength)}...`
    }
    return theText
  }
  return ''
}

export { textValidator }
