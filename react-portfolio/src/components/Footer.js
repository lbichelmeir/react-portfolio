import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
// import {GrDocumentText} from 'react-icons/gr'
import {HiDocumentText} from 'react-icons/hi'
function Footer() {
    return (
        <div className="footer">
            <h3> - - Let's Connect - -</h3> 
            <div className="icons">
            <a href="mailto:l.bichelmeir@gmail.com" className="icons"><MdEmail/> </a>
            <a href="https://www.linkedin.com/in/lauren-bichelmeir/" target="_blank" className="icons"><FaLinkedin/> </a>            
            <a href="https://github.com/lbichelmeir" target="_blank" className="icons"><FaGithub/> </a>
            {/* <Link to="/Resume" className="icons"><HiDocumentText/></Link> */}
           
            </div>
            {/* // 🪐 */}
            <p>Made with 💛 and ☕ </p>
        </div>
    )
}

export default Footer

