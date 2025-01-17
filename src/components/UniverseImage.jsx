import React from "react";
import "../styles/UniverseImage.css"
import { motion } from "framer-motion";






export function UniverseImage(){

  return(
    <div style={{display: "flex", justifyContent: "center"}}>

      <motion.div
        initial={{marginTop: "80px", height: "800" , width: "80%"}}
        whileInView={{marginTop: "0px", height: "880", width: "100%"}}
        transition={{
          ease: "easeInOut",
          duration: 0.75
        }}
      >


    <div className='universeImageBox'>
        <img src={require('../images/collection-5180255.jpg')} alt="마몽드 수분광 유니버스" />
        
        
        
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1} }
          transition={{
            ease: "easeInOut",
            duration: 0.75
          }}
        >
        <div className='FLORAGLOWROSEContentsBox'>
        <p className='FLORAGLOWROSEText'>FLORA Glow Rose</p>
        <p className='universeText'>마몽드 수분광 유니버스</p>
        <button>자세히 보기</button>        
        </div>
        </motion.div>


      </div>
      </motion.div>
    </div>
    
  )
}