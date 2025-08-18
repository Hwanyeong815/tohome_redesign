// DetailArt.jsx
import React from "react";
import { DetailArtStyle } from "./style";
import DetailArtMain from "./DetailArtMain";
import DetailArtSub from "./DetailArtSub";
import DetailArtFaq from "./DetailArtFaq";
import DetailReview from "./DetailReview";

const DetailArt = ({ activeIndex = 0 }) => {
  return (
    <DetailArtStyle>
      {activeIndex === 0 && <DetailArtMain />}
      {activeIndex === 1 && <DetailArtSub />}
      {activeIndex === 2 && <DetailArtFaq />}
      {activeIndex === 3 && <DetailReview />}
    </DetailArtStyle>
  );
};

export default DetailArt;
