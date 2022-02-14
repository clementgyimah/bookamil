import '../assets/css/BookDetailModal.css'
import '../assets/css/FontSize.css'
import { IBookModalProps, TMouseEvent } from '../types'
import { AiIcon } from './Icons'
import { Button } from './Button'
import { textValidator } from '../functions'

const BookDetailModal = (props: IBookModalProps) => {
  const modalClass = props.show ? 'book-modal-container' : 'book-modal-container-disable'
  const closeModalHandler = () => {
    return props.close()
  }

  // prevent modal dark background click from affecting modal
  const preventClick = (e: TMouseEvent) => e.stopPropagation()

  // download book handler
  const downloadBookPDF = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    // check if pdf is available before downloading
    if (props.data.accessInfo.pdf.isAvailable && props.data.accessInfo.pdf.downloadLink) {
      window.location.href = props.data.accessInfo.pdf.downloadLink
    } else {
      alert('Oops 😔, PDF is not available for this book')
    }
  }

  // read book handler
  const readBook = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    window.open(props.data.volumeInfo.previewLink)
  }

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
