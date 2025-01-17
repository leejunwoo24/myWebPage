import React from "react";
import { Banner } from "./components/Banner";
import { BrandStory } from "./components/BrandStory";
import { VideoContents } from "./components/VideoContents";
import { UniverseImage } from "./components/UniverseImage";
import { ForMySkin } from "./components/ForMySkin";






export function HomeBody(){


  return(
    <div className="homeBody">
      <Banner />
      <BrandStory />
      <VideoContents />
      <UniverseImage />
      <ForMySkin />
    </div>
  )
}