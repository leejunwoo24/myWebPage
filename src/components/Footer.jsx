import react from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "../styles/Footer.css"





export function Footer(){

  return(
    <div className='footer'>
    
    <div className='footerContentsBox'>
    
    <div className='snsIconBox'>
      <FaFacebook size={45}/>
      <FaInstagram size={45}/>
      <FaYoutube  size={45}/>
    </div>
    
    <div className='footerTextContentsBox'>
      <p>회사소개 | </p>
      <p> 서비스이용약관 | </p>
      <p> 개인정보처리방침 | </p>
      <p> 영상정보처리방침 | </p>
      <p> 뷰티포인트</p>
    </div>
    
    <p>고객서비스센터(수신자요금부담) 080-023-5454 (월~금 : AM 09:00 ~ PM 06:00</p>
    
    <p>© AMOREPACIFIC CORPORATION. All rights reserved.</p>
    
    </div>
    
    <div className='selectLanguage'>
    <select name="language" id="lagn">
      <option value='한국/한국어'>한국/한국어</option>
      <option value='international/English'>international/English</option>
      <option value='중국'>중국</option>
    </select>
    </div>
    </div>
  )
}