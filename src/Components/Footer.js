import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      <div className='icons'>
       <label>Instagram</label>
      <FaInstagram/> <br/>
      <label>Twitter</label>
      <FaSquareXTwitter/>  <br/>
      <label>Youtube</label>
      <FaYoutube/>  <br/>
      <label>Github</label>
      <FaGithub/>  <br/>
      </div>
    </div>
  )
}
export default Footer
