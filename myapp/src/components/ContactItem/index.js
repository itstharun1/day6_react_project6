
import './index.css'

const ContactItem = props => {
  const {contactDetails, toggleIsFavorite} = props
  const {name, mobileNo, isFavorite, id} = contactDetails

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  return (
    <li className="table-row b2">
      <div className="table-cell name-column">
        <p className='t1'>{name}</p>
      </div>
      
      <div className="table-cell mobile-no-column b2">
        <p className="mobile-no-value t1">{mobileNo}</p>
        <button
          type="button"
          className="t1 favorite-icon-container"
          onClick={onClickFavoriteIcon}
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
    </li>
  )
}

export default ContactItem