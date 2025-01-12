import react from 'react';
import './App.css';
//yarn add react-router-dom@5
import { Route, Link } from "react-router-dom";
import { OurStory } from "./components/subComponents/OurStory";
import { BestandYou } from "./components/subComponents/BestandYou";
import { Product } from "./components/subComponents/Product";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

function App() {

  
  return (
    // 헤더 부분
  <div className='home'>
  
  
    <header className='webHeader'>

    <div className='logologinfindstore'>
  {/* 로고 */}
<h1 className='logo'>mamonde</h1> 

<div className='loginAndFindStore'>
  <p>로그인</p>
  <p>매장찾기</p>
  <p><IoIosSearch size={25}/></p>
</div>

    </div>

<nav className='routerNav'>
  <p>
  <Link to="/components/subComponents/OurStory">OurStory</Link>
  </p>
  
  <p>
  <Link to="/components/subComponents/BestandYou">Best&You</Link>
  </p>

  <p>
  <Link to="/components/subComponents/Product">Product</Link>
  </p>
</nav>
</header>

{/* <div>
<Route path="/components/subComponents/OurStory"  component={OurStory}/>
<Route path="/components/subComponents/BestandYou"  component={BestandYou}/>
<Route path="/components/subComponents/Product"  component={Product}/>
</div> */}



{/* body부분 */}
<div className='homeBody'>

      {/* 화면 최상단 메인 이미지 */}
      <div className='blueEraserImage'>
      <img src={require('./images/cream-621340.jpg')} alt='블루 이레이저크림'/>
        <div/>

      <div className='arrowBox1'>
    <IoIosArrowBack  size={100}/>
    <IoIosArrowForward size={100}/>
    </div>

    
        <div className='blueEraserTextBox'> 
        <h1>블루 이레이저 크림</h1>
        <h3> 블루이레이저 크림 트러블 흔적 개선 여드름 케어</h3>
        <button>자세히 보기</button>
        </div>
    
      </div>


      <div className='brandStroyBox'>
        <p>HYPER FLORA의 힘으로 </p>
        <p>틔어 나답게</p>
        <button>브랜드 스토리 알아보기</button>
      </div>


      {/*영상 컨텐츠  */}
      <div className='videocontentsBox'>
        
        <div className='videoBox'>
      
      <video >
        <source src={require('./video/232461_medium.mp4')}/>
      </video>
        
      <div className='imageBox'>
        <div className='img1'>
          <img src={require('./images/clamy-blusher-4517880_1920.jpg')} alt="쿠션" /> 
        
        <p><span className='HYPERFLORATXT'>HYPER FLORA</span>
        <br/>
        <br/>
        하이퍼 플로라 꽃에서 <br/>
        찾은 효능 성분과 최신의 스킨케어 성분을<br/>
        결합하여 피부 시너지를 생성하는 <br/>마몽드의 스킨케어 솔루션</p>
        </div>

        <div className='img2'>
          <p>자신만의 독특한 방식으로 <br/> 삶을 꽃 피울 수 있도록<br/>마몽드는 아름다움의 경계를 깨고<br/> 모두가  자신만의 <br/>독특한 방식으로 <br/>삶을 꽃 피울 수 있도록 합니다.</p>
          
          <img src={require('./images/natural-cosmetics-4528581_1920.jpg')} alt="빨간 화장품품" /> 
          </div>
      </div>
        
        </div>
      
      </div>


      {/* 화면중간 이미지 컨텐츠 */}
      <div className='universeImageBox'>
        <img src={require('./images/collection-5180255.jpg')} alt="마몽드 수분광 유니버스" />
        
        <div className='FLORAGLOWROSEContentsBox'>
        <p className='FLORAGLOWROSEText'>FLORA Glow Rose</p>
        <p className='universeText'>마몽드 수분광 유니버스</p>
        <button>자세히 보기</button>
        
        </div>
      </div>
      


    {/*formySkin 부분  */}
    <div className='forMySkinContentsBox'>
    <h1>For # My Skin</h1>

    <div className='arrowBox2'>
    <ArrowBackIosIcon  fontSize='large'/>
    <ArrowForwardIosIcon fontSize='large'/>
    </div>
    <div className='forMySkin'>
      <div className='forMySkinImg'>
      <img src={require('./images/cosmetics-6345792_1280.jpg')} alt='딥클렌징'/>

      <div className='forMySkinText'>
      <p className='productTag'>#딥클렌징</p>
      <p className='productName'>어메이징 딥 클렌징 폼</p>
      <p className='productSkill'>모공피지연화 클렌징 폼</p>
      </div>

      </div>

      <div className='forMySkinImg'>
      <img src={require('./images/cream-621340.jpg')} alt='자국제거'/>

      <div className='forMySkinText'>
      <p className='productTag'>#자국제거</p>
      <p className='productName'>블루 이레이저 크림</p>
      <p className='productSkill'>흉터 제거 제생크림</p>
      </div>

      </div>

      <div className='forMySkinImg'>
      <img src={require('./images/glass-4108085_1280.jpg')} alt='영양공급'/>

      <div className='forMySkinText'>
      <p className='productTag'>#영양공급</p>
      <p className='productName'>세럼 세럼 세럼 세럼</p>
      <p className='productSkill'>영양공급 세럼</p>
      </div>

      </div>

      <div className='forMySkinImg'>
      <img src={require('./images/cream-1327847_1280.jpg')} alt='보습크림'/>

      <div className='forMySkinText'>
      <p className='productTag'>#보습크림</p>
      <p className='productName'>보습크림 보습크림</p>
      <p className='productSkill'>보습크림 보습크림 보습크림</p>
      </div>

      </div>
    </div>

    </div>





    </div>
{/* footer부분 */}
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

</div>
  );
}

export default App;
