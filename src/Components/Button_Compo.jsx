import './Button_Compo.css'

function Buttonfunction(){
    return(
        <div className='button_container'>
            <input type="button" value='Go Back' className='btn btn_left'  />
            <input type="button" value="Take Me Home" className='btn btn_right'/>
        </div>
    )
}

export default Buttonfunction