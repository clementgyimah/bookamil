import '../assets/css/HomePage.css'
import '../assets/css/Animations.css'

const Spinner = () => {
  return (
    <div className="spinner-main-container">
      <div aria-label="book-loader" className="spinner-style spinner-animation">
        <span>{null}</span>
      </div>
    </div>
  )
}

export { Spinner }
