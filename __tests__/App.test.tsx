import React from 'react'
import { render, screen } from '@testing-library/react'
import { HomePage } from '../src/pages/home/HomePage'

test('renders learn react link', () => {
  render(<HomePage />)
  const linkElement = screen.getByText(/homepage/i)
  expect(linkElement).toBeInTheDocument()
})
