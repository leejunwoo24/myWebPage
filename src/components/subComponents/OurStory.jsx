import React from "react";
import "../../styles/subComponentStyles/BrandStory.css"





export function OurStory(){


  return(
    <div className="OurStory">
    
    <div className="OurStoryBanner">
      <img src={require('../../images/landscape-2837454.jpg')} alt="배너이미지" />
      <p>Powered by Hyper Flora
        <br />
      하이퍼 플로라로 피어나는 나다운 아름다움</p>
    </div>




    <div className="brandStoryUpPart">

      <div className="upPartTextBox">
      <p>HYPER FLORA
        <br />
        하이퍼 플로라
        <br />
        <br />
        꽃에서 찾은 효능 성분과 최신의 스킨케어 성분을
        결합하여 피부 시너지를 생성하는
        마몽드의 스킨케어 솔루션</p>
      </div>

      <div className="upPartImageBox">
      <img src={require('../../images/pink-2668845_1920.jpg')} alt="페이지상단이미지" />
      </div>

    </div>




    <div className="brandStoryMiddlePart">
      <img src={require('../../images/flowers-6803234_1920.png')} alt="페이지중간이미지" />
      <p>자신만의 독특한 방식으로
        <br />
삶을 꽃 피울 수 있도록
<br />
<br />
마몽드는 아름다움의 경계를 깨고 모두가
자신만의 독특한 방식으로 삶을 꽃 피울 수 있도록 합니다.</p>
    </div>







    <div className="brandStoryUnderPart">

      <div className="underPartTextBox">
        <p>마몽드의 새로운 심볼
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
      
      <div className="underPartImagePart">
        <img src={require("../../images/floral-2023192_1280.png")} alt="페이지하단이미지" />
      </div>
    </div>



    </div>
  )
} 