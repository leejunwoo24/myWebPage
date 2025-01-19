/* eslint-disable array-callback-return */
import react from 'react';
import './App.css';
import { Route } from "react-router-dom";
import { OurStory } from "./components/subComponents/OurStory";
import { Best } from './components/subComponents/BestandYou/Best';
import { Product } from "./components/subComponents/Product";
import { HomeBody } from './HomeBody';
import { Footer } from './components/Footer';
import { Header } from './Header';
import { You } from './components/subComponents/BestandYou/You';
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
<Route path="/components/subComponents/BestandYou/Best"  component={Best}/>
<Route path="/components/subComponents/BestandYou/You"
component={You}
/>
<Route path="/components/subComponents/Product"  component={Product}/>
</div>

    <Footer/>



</div>
  );
}

export default App;
