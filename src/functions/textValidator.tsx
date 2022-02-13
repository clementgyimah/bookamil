import { ITextValidatorProps } from '../types'

const textValidator = ({ theText, maxLength }: ITextValidatorProps) => {
  if (theText) {
    if (theText.length > maxLength) {
      theText = `${theText.slice(0, maxLength)}...`
    }
    return theText
  }
  return ''
}

export { textValidator }
