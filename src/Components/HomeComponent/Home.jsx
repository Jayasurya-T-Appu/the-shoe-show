
import './Home.css'
import { Element } from 'react-scroll';
import LandingImage from '../../assets/landing_image.jpg'
const Home = () => {
  return (
  <Element name="home">
    <div className="home_container">
        <div className='home_left_container'>
            <h2>Discover<br/>the<br/>Latest</h2>
           

            <p>Elevate your style with our premium <br/> selection of shoes</p>
            <button className='shop_now_button'>Shop Now</button>
            <p>Crafted for Comfort and Durability</p>
            <div className='home_feature_texts'>
                <p>Explore</p>
                <p>Feature</p>
                <p>Comfort</p>
            </div>
        </div>
        <div className='home_right_container'>
        
            <img className='landing_image' src={LandingImage} alt="landing" />
   
        </div>

    </div>

  </Element>
  )
}

export default Home
