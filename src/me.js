import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import photo from './assets/PortfolioPhoto.jpg'
function Me() {

    return(
        <div className="meParent" id="Me">

            <div className='meDiv'>
                <div className='introColumn'>
                    <p>This is Me   </p>
                    <AiOutlineArrowRight size={20}/>
                </div>
                <img className='photo' src={photo}/>
            </div>


        </div>
    )
}

export default Me;