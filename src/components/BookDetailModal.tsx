import '../assets/css/BookDetailModal.css'
import '../assets/css/FontSize.css'
import { IBookModalProps, TMouseEvent, ITextValidatorProps } from '../types'
import { AiIcon } from './Icons'
import { Button } from './Button'

const BookDetailModal = (props: IBookModalProps) => {
  const modalClass = props.show ? 'book-modal-container' : 'book-modal-container-disable'
  const closeModalHandler = () => {
    return props.close()
  }

  const preventClick = (e: TMouseEvent) => e.stopPropagation()

  const textValidator = ({ theText, maxLength }: ITextValidatorProps) => {
    if (theText) {
      if (theText.length > maxLength) {
        theText = `${theText.slice(0, maxLength)}...`
      }
      return theText
    }
    return ''
  }

  const downloadBookPDF = () => null

  const readBook = () => null

  return (
    <div className={modalClass} onClick={closeModalHandler}>
      <div onClick={preventClick} className="book-details-container">
        <div className="thumbnail-container">
          <img
            alt="cover_image"
            src={props.data.volumeInfo.imageLinks.thumbnail}
            className="thumbnail-style"
          />
        </div>
        <div className="details-container">
          <div className="title-container">
            <span className="title20" id="title-text">
              {textValidator({ theText: props.data.volumeInfo.title, maxLength: 40 })}
            </span>
            <span className="title20" id="close-modal-icon">
              <AiIcon
                color="#E05263"
                size={30}
                title="modal close icon"
                iconAction={closeModalHandler}
                className="close-book-modal-icon"
              />
            </span>
          </div>
          <div className="book-description-container">
            <span className="title15" id="subtitle-text">
              {textValidator({ theText: props.data.volumeInfo.subtitle, maxLength: 100 })}
            </span>
            <span className="normal-text15" id="book-description-text">
              {textValidator({ theText: props.data.volumeInfo.description, maxLength: 900 })}
            </span>
          </div>
          <div className="button-container">
            <div className="download-book-button-container">
              <Button
                title="Download PDF"
                buttonAction={downloadBookPDF}
                showOpenNewTabIcon={false}
              />
            </div>
            <div className="read-book-button-container">
              <Button title="Read Book" buttonAction={readBook} showOpenNewTabIcon={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { BookDetailModal }
