import '../assets/css/Icon.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { IoOpenOutline } from 'react-icons/io5'
import { IIconProps } from '../types'

// Ant Design icons
const AiIcon = (props: IIconProps) => {
  // perform icon action
  const handleIconAction = () => {
    if (props.iconAction) {
      props.iconAction()
    }
  }

  return (
    <AiFillCloseCircle
      color={props.color}
      size={props.size}
      title={props.title}
      className={props.className}
      onClick={handleIconAction}
    />
  )
}

// Ionicons 5 icons
const Io5Icon = (props: IIconProps) => {
  // perform icon action
  const handleIconAction = () => {
    if (props.iconAction) {
      props.iconAction()
    }
  }

  return (
    <IoOpenOutline
      color={props.color}
      size={props.size}
      title={props.title}
      className={props.className}
      onClick={handleIconAction}
    />
  )
}

export { AiIcon, Io5Icon }
