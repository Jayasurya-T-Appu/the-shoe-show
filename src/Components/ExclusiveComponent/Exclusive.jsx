import "./Exclusive.css"
import { Element } from 'react-scroll';
import ex_01 from '../../assets/ex_01.jpg'
import ex_02 from '../../assets/ex_02.jpg'
import ex_03 from '../../assets/ex_03.jpg'
import ExclusiveBanner from "./ExclusiveBannerComponent/ExclusiveBanner";
const Exclusive = () => {
  return (
<Element name="product">
    <div className="products_container">
        <h2 className="exclusive_title">Introducing Our<br/>Exclusive<br/>Collections</h2>
        <div className="exclusive_image_container">
        <ExclusiveBanner imageUrl={ex_02} shoe_name="Nike Air"/>
        <ExclusiveBanner imageUrl={ex_01} shoe_name={"Nike Trend"}/>
        <ExclusiveBanner imageUrl={ex_03} shoe_name ={"The Classic"}/>
            
    

        </div>

    </div>

</Element>
  )
}

export default Exclusive
