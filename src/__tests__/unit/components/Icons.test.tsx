import { render, screen } from '@testing-library/react'
import { AiIcon, Io5Icon } from '../../../components'

describe('icon components unit test', () => {
  test('ai icon unit test', () => {
    const aiIconTitle = 'Test ai icon'
    render(<AiIcon color="blue" size={10} title={aiIconTitle} />)
    const linkElement = screen.getByText(aiIconTitle)
    expect(linkElement).toBeInTheDocument()
  })

  test('io5 icon unit test', () => {
    const io5IconTitle = 'Test Button'
    render(<Io5Icon color="blue" size={10} title={io5IconTitle} />)
    const linkElement = screen.getByText(io5IconTitle)
    expect(linkElement).toBeInTheDocument()
  })
})
