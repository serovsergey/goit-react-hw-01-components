import PropTypes from 'prop-types'
import noImage from '../images/no-image.svg';

function FriendListItem({ avatar = noImage, name, isOnline = false, id }) {
  return (
    <li className="item">
      <span className="status">{isOnline ? 'Online' : 'Offline'}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  id: PropTypes.number.isRequired,
}

export default FriendListItem
