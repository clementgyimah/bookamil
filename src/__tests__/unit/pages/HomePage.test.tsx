import { render, screen } from '@testing-library/react'
import { HomePage } from '../../../pages/home/HomePage'

test('home page unit test', () => {
  render(<HomePage />)
  const linkElement = screen.getByText(/Most popular/i)
  expect(linkElement).toBeInTheDocument()
})
