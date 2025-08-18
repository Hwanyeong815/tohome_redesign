import React from "react";
import DetailReviewList from "./DetailReviewList";
import { DetailArtReviewStyle } from "./style";

const DetailReview = () => {
  return (
    <DetailArtReviewStyle>
      <div className="reviewTop">
        <div className="grade-star">
          <span></span>
          <strong>
            <em>4.5</em>
            <i className="bar">/</i>5
          </strong>
        </div>
        <div className="reviewBtn">
          <button>리뷰 작성</button>
        </div>
      </div>
      <DetailReviewList />
    </DetailArtReviewStyle>
  );
};

export default DetailReview;
