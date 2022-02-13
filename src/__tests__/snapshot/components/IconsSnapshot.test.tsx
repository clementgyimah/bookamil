import renderer from 'react-test-renderer'
import { AiIcon, Io5Icon } from '../../../components'

describe('icon components snapshot test', () => {
  test('ai icon snapshot test', () => {
    const AiIconSnap = renderer.create(<AiIcon color="blue" size={10} title="Test Ai icon" />)
    const AiIconSnapTree = AiIconSnap.toJSON()
    expect(AiIconSnapTree).toMatchSnapshot()
  })
  test('io5 icon snapshot test', () => {
    const Io5IconSnap = renderer.create(<Io5Icon color="blue" size={10} title="Test Io5 icon" />)
    const Io5IconSnapTree = Io5IconSnap.toJSON()
    expect(Io5IconSnapTree).toMatchSnapshot()
  })
})
