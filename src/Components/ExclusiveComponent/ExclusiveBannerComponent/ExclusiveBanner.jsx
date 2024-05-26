import "./ExclusiveBanner.css"
const ExclusiveBanner = ({imageUrl, shoe_name}) => {
  return (
    <div className="banner_container" style={{backgroundImage:`url(${imageUrl})`}}>
      <div className="overlay">
        <p className="overlay_text">{shoe_name}</p>
      </div>
    </div>
  )
}

export default ExclusiveBanner
