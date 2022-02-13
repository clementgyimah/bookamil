import { render, screen } from '@testing-library/react'
import { Button } from '../../../components'

test('button unit test', () => {
  const buttonPressedAction = () => null
  const buttonTitle = 'Test Button'
  const buttonShowOpenNewTabIcon = true
  render(
    <Button
      title={buttonTitle}
      showOpenNewTabIcon={buttonShowOpenNewTabIcon}
      buttonAction={buttonPressedAction}
    />
  )
  const linkElement = screen.getByText(buttonTitle)
  expect(linkElement).toBeInTheDocument()
})
