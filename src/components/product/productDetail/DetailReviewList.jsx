import React from "react";
import DetailReviewItem from "./DetailReviewItem";
import { ReviewListStyle } from "./style";

const DetailReviewList = () => {
  return (
    <ReviewListStyle>
      <div className="tab">
        <div className="photo">
          <p>포토 리뷰</p>
        </div>
        <div className="best">
          <p>베스트순</p>
        </div>
        <div className="newest">
          <p>최신순</p>
        </div>
      </div>
      <DetailReviewItem />
      <DetailReviewItem />
      <DetailReviewItem />
      <DetailReviewItem />
      <DetailReviewItem />
    </ReviewListStyle>
  );
};

export default DetailReviewList;
