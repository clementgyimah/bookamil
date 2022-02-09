import '../../assets/css/HomePage.css'
import '../../assets/css/FontSize.css'
import { BookCard } from '../../components/BookCard'

const HomePage = () => {
  return (
    <div className="main-container">
      <header>
        <div className="app-details-container">
          <span id="app-name-text" className="title2">
            Bookamil
          </span>
          <span id="short-description-text" className="title4">
            Browse millions of books. Read your favourite books here
          </span>
        </div>
      </header>
      <div className="home-body">
        <div className="category-title-container">
          <span className="normal-text1">Most popular</span>
        </div>
        <div className="category-content">
          <BookCard />
        </div>
      </div>
    </div>
  )
}

export { HomePage }
