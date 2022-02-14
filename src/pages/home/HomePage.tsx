import * as React from 'react'
import '../../assets/css/HomePage.css'
import '../../assets/css/FontSize.css'
import { BookCard } from '../../components/BookCard'
import axios from 'axios'
import { Spinner } from '../../components'
import { IBookItems, IBook } from '../../types'

const HomePage = () => {
  const [booksData, setBooksData] = React.useState<IBook>({
    totalItems: 0,
    kind: '',
    items: [],
  })
  const [errorOccured, setErrorOccured] = React.useState(false)
  React.useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=poland&maxResults=30`)
      .then((resData) => {
        setBooksData(resData.data)
      })
      .catch((err) => {
        console.error(new Error(`Error when quering book data: \n ${err}`))
        setErrorOccured(true)
      })
  }, [booksData])

  if (errorOccured) {
    throw new Error('occured in home page')
  }
  return (
    <div className="main-container">
      <header>
        <div className="app-details-container">
          <span id="app-name-text" className="title40">
            Bookamil
          </span>
          <span id="short-description-text" className="title20">
            Browse millions of books. Read your favourite books here
          </span>
        </div>
      </header>
      <div className="home-body">
        <div className="category-title-container">
          <span className="normal-text25">Most popular</span>
        </div>
        <div className="category-content">
          {booksData.totalItems !== 0 ? (
            booksData.items.map((eachBook: IBookItems) => (
              <BookCard key={eachBook.id} bookItem={eachBook} />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  )
}

export { HomePage }
