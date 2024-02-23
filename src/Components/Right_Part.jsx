import image from '../Assets/image.jpg'
import './Right_Part.css'
function Right(){
    return(
        <div className="right_component">
            <img src={image} alt="photo" />
        </div>
    )
}

export default Right