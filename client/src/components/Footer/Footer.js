import React from 'react';
import {Link} from 'react-router-dom'
import amazonlogo from '../../assets/images/prime-video-logo.png'

import './Footer.scss'
const Footer = ()=>{
    return(
        <div className='Footer'>
            <div className='FooterLogoContainer'>
                <img src={amazonlogo} alt='Amazon Prime Logo' className='FooterLogo'></img>
            </div>            
            
        </div>
        
    )
}

export default Footer;