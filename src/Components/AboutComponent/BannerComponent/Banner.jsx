import './Banner.css'
const Banner = ({imageUrl, text}) => {
  return (
   <div className='image_item'>
    <div className='banner_image_container' style={{backgroundImage:`url(${imageUrl})`}}></div>
    <p className='banner_text'>{text}</p>

   </div>
  )
}

export default Banner
