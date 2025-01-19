import React from "react";
import "../../styles/subComponentStyles/OurStory.css"
import { motion } from "framer-motion"




export function OurStory(){


  return(
    <div className="OurStory">
    
    <div className="OurStoryBanner">
      <img src={require('../../images/landscape-2837454.jpg')} alt="배너이미지" />
      <p>Powered by Hyper Flora
        <br />
      <span  className="hyper">하이퍼 플로라로 피어나는 나다운 아름다움</span></p>
    </div>




    <div className="ourStoryUpperPart">

      <motion.div
        initial={{opacity: 0, y: 350}}
        whileInView={{opacity:1, y:250}}
        transition={{
          ease: "easeInOut",
          duration: 1.5
        }}
      >
      <div className="upPartTextBox">
      <p><span className="hyperflora">HYPER FLORA</span>
        <br />
        <span className="hyperflorasub">하이퍼 플로라</span>
        <br />
        <br />
        꽃에서 찾은 효능 성분과 최신의 스킨케어 성분을
        <br />
        결합하여 피부 시너지를 생성하는
        <br />
        마몽드의 스킨케어 솔루션</p>
      </div>
      </motion.div>

      <div className="upPartImageBox">
      <img src={require('../../images/pink-2668845_1920.jpg')} alt="페이지상단이미지" />
      </div>

    </div>




    <div className="ourStoryMiddlePart">
      <img src={require('../../images/flowers-6803234_1920.png')} alt="페이지중간이미지" />

      <motion.div
      initial={{opacity: 0, y: 100}}
      whileInView={{opacity:1, y:0}}
      transition={{
        ease: "easeInOut",
        duration: 0.75
      }}
      >
      <div className="middlePartTextBox">
      <p>
        <span className="lifeisflower">
        자신만의 독특한 방식으로
        <br />
삶을 꽃 피울 수 있도록
          </span>
<br />
<br />
마몽드는 아름다움의 경계를 깨고 모두가
<br />
자신만의 독특한 방식으로 삶을 꽃 피울 수 있도록 합니다.</p>
      </div>
      </motion.div>

    </div>







    <div className="ourStoryUnderPart">


      <motion.div
        initial={{opacity: 0, y: 400}}
        whileInView={{opacity: 1, y: 300}}
        transition={{
          ease: "easeInOut",
          duration: 1.5
        }}
      >
      <div className="underPartTextBox">
        <p> <span className="symbol">마몽드의 새로운 심볼</span>
          <br />
          <br />

1991년의 브랜드 헤리티지를 이어받아,
<br />
경계를 넘나드는 유기적인 형태의 M에 꽃을 더해
<br />
마몽드만의 자유롭고 당당한 아름다움을 표현합니다.
<br />
</p>
      </div>

      </motion.div>
      
      <div className="underPartImagePart">
        <img src={require("../../images/floral-2023192_1280.png")} alt="페이지하단이미지" />
      </div>
    </div>



    </div>
  )
} 