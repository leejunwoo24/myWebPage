import React, { useState } from "react";
import "../../../styles/subComponentStyles/Best.css"
import { motion } from "framer-motion"






export function Best(){
  const [toggle, setToggle] = useState(false);


  return(
    <div className="bestContents">
      <div className="bestandNewLink">
        <button>Best</button>
        <button>New</button>
      </div>

      <h1 className="bestContentsTitle" >Best Seller</h1>

      <motion.div 
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{
          ease:"easeInOut",
          duration: 0.75
        }}
      >
      <div className="bestProductContents">
        <div className="bestProductInformation">
          <p className="bestProductTitle">블루 이레이저 크림</p>
          <img src={require("../../../images/cream-621340.jpg")} alt="블루이레이저크림" />
          <p className="bestProductContent">블루 이레이저 크림 트러블 흔적
            <br /> 
          개선 여드름 케어</p>
          <button>자세히 보기</button>
        </div>

        <div className="bestProductImage">
            <img src={require("../../../images/cream-621340.jpg")} alt="블루이레이저크림" />
        </div>
      </div>
      </motion.div>


      
      <motion.div 
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{
          ease: "easeInOut",
          duration: 0.75
        }}
      >
      <div className="bestProductContents">

        <div className="bestProductImage">
          <img src={require("../../../images/cream-3496778.jpg")} alt="마몽드 어성초 크림" />
        </div>
        <div className="bestProductInformation">
        <p className="bestProductTitle">마몽드 어성초 크림</p>
          <img src={require("../../../images/cream-3496778.jpg")} alt="마몽드 어성초 크림" />
          <p className="bestProductContent">마몽드 어성초 크림 여드름 흔적
            <br />
          개선 진정 크림</p>
          <button>자세히 보기</button>
        </div>
      </div>
      </motion.div>


      <motion.div
        initial={{opacity: 0, y:20}}
        whileInView={{opacity: 1, y:0}}
        transition={{
          ease:"easeInOut",
          duration: 0.75
        }}
      >
      <div className="bestProductContents">
        <div className="bestProductInformation">
          <p className="bestProductTitle">마몽드 클리니큐 크림</p>
         
          <img src={require("../../../images/tube-302745_1920.jpg")} alt="마몽드 클리니큐 크림림" />
      
          <p className="bestProductContent">마몽드 클리니큐 크림 피부장벽
            <br />
          손상 개선 크림</p>
          <button>자세히 보기</button>
        </div>

        <div className="bestProductImage">
            <img src={require("../../../images/tube-302745_1920.jpg")} alt="마몽드 클리니큐 크림" />
        </div>
      </div>
      </motion.div>

    </div>
  )
}