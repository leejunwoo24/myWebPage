import React from "react";
import "../styles/VideoContents.css"
import { motion } from "framer-motion";







export function VideoContents(){


  return(
    <div className='videocontentsBox'>
        <motion.div
          initial={{width: '75%'}}
          whileInView={{width: '100%'}}
          viewport={{ once: false }}
          transition={{
            ease: 'easeInOut',
            duration: 0.75

          }}
        >

        <div className='videoBox'>
      
        <iframe src="https://cdn.pixabay.com/video/2020/12/03/58142-487508532_large.mp4"/>

        <motion.div
          initial={{opacity: 0 , }}
          whileInView={{opacity: 1, }}
          transition={{
            ease: 'easeInOut',
            duration: 0.75
          }}
        >

      <div className='imageBox'>
        <div className='img1'>
          <img src={require('../images/clamy-blusher-4517880_1920.jpg')} alt="쿠션" /> 
        
        <p><span className='HYPERFLORATXT'>HYPER FLORA</span>
        <br/>
        <br/>
        하이퍼 플로라 꽃에서 <br/>
        찾은 효능 성분과 최신의 스킨케어 성분을<br/>
        결합하여 피부 시너지를 생성하는 <br/>마몽드의 스킨케어 솔루션</p>
        </div>

        <div className='img2'>
          <p>자신만의 독특한 방식으로 <br/> 삶을 꽃 피울 수 있도록<br/>마몽드는 아름다움의 경계를 깨고<br/> 모두가  자신만의 <br/>독특한 방식으로 <br/>삶을 꽃 피울 수 있도록 합니다.</p>
          
          <img src={require('../images/natural-cosmetics-4528581_1920.jpg')} alt="빨간 화장품품" /> 
          </div>
      </div>
        </motion.div>
        
        </div>
      
        </motion.div>
      </div>
  )
}