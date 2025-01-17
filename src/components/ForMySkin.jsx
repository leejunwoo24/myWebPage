import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ForMySkin.css"






export function ForMySkin(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow:true,
  
  }


  return(
    <div className="slider-box">
        <h1 className="forMySkinTitle">For My#Skin</h1>
        <br />
      <Slider {...settings}>
        <div className="forMySkinProductBox">
          <img src={require("../images/cosmetics-6345792_1280.jpg")} alt="이미지1" />
          <div className="forMySkinProductTextBox">
            <p className="text1">#딥클렌징</p>
            <p className="text2">마몽드 딥 클렌징 폼</p>
            <p className="text3">모공 피지연화 클렌징 폼</p>
          </div>

        </div>

        <div className="forMySkinProductBox">
          <img src={require("../images/cream-621340.jpg")} alt="이미지2" />

          <div className="forMySkinProductTextBox">
            <p className="text1">#자국제거</p>
            <p className="text2">블루 이레이저 크림</p>
            <p className="text3">흉터 제거 재생크림</p>
          </div>
        </div>

        <div className="forMySkinProductBox">
          <img src={require("../images/glass-4108085_1280.jpg")} alt="이미지3" />

          <div className="forMySkinProductTextBox">
            <p className="text1">#영양공급</p>
            <p className="text2">마몽드 영양 세럼</p>
            <p className="text3">피부 영양 공급 세럼</p>
          </div>
        </div>

        <div className="forMySkinProductBox">
          <img src={require('../images/cream-1327847_1280.jpg')} alt="이미지4" />

          <div className="forMySkinProductTextBox">
            <p className="text1">#보습크림</p>
            <p className="text2">마몽드 보습 크림</p>
            <p className="text3">피부 보습 기능 크림</p>
          </div>
        </div>

        <div className="forMySkinProductBox"> 
          <img src={require("../images/cream-194126_1920.jpg")} alt="이미지5" />

          <div className="forMySkinProductTextBox">
            <p className="text1">#주름개선</p>
            <p className="text2">마몽드 아이크림</p>
            <p className="text3">눈가 주름 개선 아이크림</p>
          </div>
        </div>

        <div className="forMySkinProductBox">
          <img src={require("../images/cream-4967111_1920.jpg")} alt="이미지6" />

          <div className="forMySkinProductTextBox">
            <p className="text1">#여드름 개선</p>
            <p className="text2">마몽드 어성초 크림</p>
            <p className="text3">여드름 피부 진정 크림</p>
          </div>
        </div>

        <div className="forMySkinProductBox">
            <img src={require("../images/tube-302745_1920.jpg")} alt="이미지7" />

            <div className="forMySkinProductTextBox">
              <p className="text1">#피부장벽</p>
              <p className="text2">마몽드 클리니큐 크림</p>
              <p className="text3">피부장벽 손상 케어 크림</p>
            </div>
        </div>
        
        <div className="forMySkinProductBox">
            <img src={require("../images/women-4726516_1920.jpg")} alt="이미지8" />

            <div className="forMySkinProductTextBox">
              <p className="text1">#미백효과</p>
              <p className="text2">마몽드 미백 크림</p>
              <p className="text3">피부 미백 기능 크림</p>
            </div>
        </div>
      </Slider>
    </div>
    
  )

}