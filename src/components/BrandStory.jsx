import React from "react"
import "../styles/BrandStory.css"
import { motion } from "framer-motion"






export function BrandStory(){

  return(
    <motion.div
      initial={{opacity: 0, y: 100}}
      whileInView={{opacity: 1, y: 50}}
      transition={{
        ease: "easeInOut",
        duration: 1
      }}
    >
    <div className='brandStroyBox'>
    <p>HYPER FLORA의 힘으로 </p>
    <p>틔어 나답게</p>
    <button>브랜드 스토리 알아보기</button>
  </div>

    </motion.div>

  );
}