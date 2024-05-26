import './About.css'
import { Element } from 'react-scroll';
import ModelImage from "../../assets/about_model.jpg"
import ShoeOne from "../../assets/shoe_01.jpg"
import ShoeTwo from "../../assets/shoe_02.jpg"
import ShoeThree from "../../assets/shoe_03.jpg"
import Banner from './BannerComponent/Banner';
const About = () => {
  return (
    <Element name="about">
        <div className='about_container'>
          <h2 className='about_title'>The Classic<br/>Us</h2>
          <div className='image_items_container'>
            <Banner imageUrl = {ModelImage} text={'Embrace'}/>
            <Banner imageUrl = {ShoeOne} text={'Step into'}/>
            <Banner imageUrl = {ShoeTwo} text={'Unleash'}/>
            <Banner imageUrl = {ShoeThree} text={'Redefine'}/>

          </div>
          <div className='text_blocks'>
          <div className="text_block">
              <p>Unlock Your Potential: Our Shoe Collection Combine CLassic Aesthetics with Innovative Technologies, Empowering You to Conquer the Day in</p>
              <span style={{ display: "block", color: "#757274", fontWeight: 600, marginTop: "1rem" }}>Explore Our Collection</span>
            </div>
            <div className="text_block">
              <p>Discover the Perfect Fir: Our Shoe COllection Blends Timeless Design with Modern Comfort. Elevate Your Style with Our Carefully Curated Selection</p>
              <span style={{ display: "block", color: "#757274", fontWeight: 600, marginTop: "1rem" }}>Elevate Your Wardrobe: Explore Our Versatile Shoe</span>
            </div>
            <div className="text_block">
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              <span style={{ display: "block", color: "#757274", fontWeight: 600, marginTop: "1rem" }}>Elevate Your Wardrobe: Explore Our Versatile Shoe</span>
            </div>
           
          </div>
        </div>
      
    </Element>
  )
}

export default About
