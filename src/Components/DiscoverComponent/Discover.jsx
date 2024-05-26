import DiscoverButton from "./ButtonComponent/DiscoverButton"
import "./Discover.css"
const Discover = () => {
  return (
    <div className="discover_container">
        <h1 className="discover_title">Discover the Perfect Fit</h1>
        <div className="button_container">
            <DiscoverButton text={'SHOP NOW'}/>
            <DiscoverButton text={'LEARN MORE'}/>
        </div>
      
    </div>
  )
}

export default Discover
