import React from "react";
import "../styles/Banner.css"
import Carousel from 'react-bootstrap/Carousel';
//import "bootstrap/dist//css/bootstrap.css" index.js에다가 꼭 넣어야 함







export function Banner(){
  

  return(
    <Carousel>
      <Carousel.Item>
        <div className="bannerContentsBox">
        
        <div className="bannerImageBox">
        <img className="bannerImage" src={require("../images/cream-621340.jpg")} alt="이미지1" />
        </div>

          <div className="bannerTextBox">
          <h1>블루 이레이져 크림</h1>
          <br />
          <h3>블루 이레이져 크림 트러블 흔적
            <br /> 개선 여드름 케어</h3>
            <br />
            <button>자세히 보기</button>
          </div>
      
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="bannerContentsBox">
       
          <div className="bannerImageBox">
        <img className="bannerImage" src={require("../images/cream-3496778.jpg")} alt="이미지2" />
          </div>
      
          <div className="bannerTextBox">
          <h1>마몽드 어성초 크림</h1>
          <br />
          <h3>마몽드 어성초 크림 여드름 피부
            <br /> 진정 여드름 케어</h3>
            <br />
            <button>자세히 보기</button>
          </div>
      
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div  className="bannerContentsBox">

          <div className="bannerImageBox">
        <img className="bannerImage" src={require("../images/honey-3084009_1280.jpg")} alt="이미지3"/>
          </div>
      
        <div className="bannerTextBox">
          <h1>허니 블렌딩 로션</h1>
          <br />
          <h3>마몽드 허니 블렌딩 로션 건성 
            <br />
            피부 보습 피부장벽</h3>
            <br />
            <button>자세히 보기</button>
        </div>
      
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="bannerContentsBox">

        <div className="bannerImageBox">
        <img className="bannerImage" src={require("../images/cosmetics-4365139_1920.jpg")} alt="이미지4" />
        </div>
      
        <div className="bannerTextBox">
          <h1>마몽드 로즈 크림</h1>
          <br />
          <h3>촘촘하게 광을 가두는 
            <br />매끈 결크림</h3>
            <br />
            <button>자세히 보기</button>
        </div>
  
        </div>
      </Carousel.Item>

    </Carousel>




    
  )
}