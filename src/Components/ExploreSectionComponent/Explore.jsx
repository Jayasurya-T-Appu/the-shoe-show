import './Explore.css'
const Explore = () => {
  return (
    <div className='explore_container'>
        <h2 className='explore_title'>Explore Our Collections</h2>
        <div className='explore_text_blocks'>
          <div className="explore_text_block">
              <p>Discover the prefect balance of style and comfort with our thoughtful designed shoes</p>
              <span style={{ display: "block", color: "#757274", fontWeight: 600, marginTop: "1rem" }}>Find Your Fit</span>
            </div>
            <div className="explore_text_block">
              <p>Elevate Your Style with Our Carefully Curated Selection</p>
              <span style={{ display: "block", color: "#757274", fontWeight: 600, marginTop: "1rem" }}>Explore Our Exclusive Design </span>
            </div>
            <div className="explore_text_block">
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <span style={{ display: "block", color: "#757274", fontWeight: 600, marginTop: "1rem" }}>Elevate Your Wardrobe: Explore Our Versatile Shoe</span>
            </div>
           
          </div>
      
    </div>
  )
}

export default Explore
