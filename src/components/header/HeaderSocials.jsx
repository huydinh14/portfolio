import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/dinh-huy-44a48b248/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/huydinh14' target="_blank"><BsGithub/></a>
        <a href='https://www.facebook.com/h4.huy' target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials