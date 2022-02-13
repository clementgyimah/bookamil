import * as React from 'react'
import '../assets/css/BookCard.css'
import { IBookCardProps } from '../types'
import { BookDetailModal } from './BookDetailModal'

const BookCard = (props: IBookCardProps) => {
  const [showModal, setShowModal] = React.useState(false)

  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <div className="book-card-container">
      <BookDetailModal show={showModal} close={closeModal} data={props.bookItem} />
      <img
        alt="bookCover"
        src={props.bookItem.volumeInfo.imageLinks.thumbnail}
        className="image-style"
        onClick={openModal}
      />
    </div>
  )
}

export { BookCard }
