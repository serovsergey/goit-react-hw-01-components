import PropTypes from 'prop-types'
import noImage from '../../images/no-image.svg';
import s from './FriendListItem.module.css';

function FriendListItem({ avatar = noImage, name, isOnline = false }) {
  return (
    <>
      <span className={`${s.status} ${isOnline && s.online}`} ></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
}

export default FriendListItem
