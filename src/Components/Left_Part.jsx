import './Left_Part.css'
import Buttonfunction from './Button_Compo'

function Left(){
    return(
        <div className="left_component">
            <p className="response">404 Page</p>
            <h3 className="title">Page Not Found</h3>
            <p className="message">Sorry, the page you are looking for doesn't exist. <br/> Here are some helpful links:</p>

            <Buttonfunction/>


        </div>
    )
}

export default Left