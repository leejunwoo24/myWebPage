/* eslint-disable array-callback-return */
import react from 'react';
import './App.css';
import { Route } from "react-router-dom";
import { OurStory } from "./components/subComponents/OurStory";
import { BestandYou } from "./components/subComponents/BestandYou";
import { Product } from "./components/subComponents/Product";
import { HomeBody } from './HomeBody';
import { Footer } from './components/Footer';
import { Header } from './Header';
//yarn add react-router-dom@5
// yarn add react-slick
// yarn add react-icons
// yarn add mui-material
// yarn add icons-material
//yarn add slick-carousel
// yarn add react-bootstrap bootstrap
// yarn add framer-motion







function App() {


  

  return (
    
    // 헤더 부분
  <div className='webPage'>
    <Header/>
<div>
<Route path="/" exact="true"  component={HomeBody}/>
<Route path="/components/subComponents/OurStory"  component={OurStory}/>
<Route path="/components/subComponents/BestandYou"  component={BestandYou}/>
<Route path="/components/subComponents/Product"  component={Product}/>
</div>

    <Footer/>



</div>
  );
}

export default App;
