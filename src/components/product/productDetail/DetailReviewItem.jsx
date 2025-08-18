import React from "react";
import { ReviewItemStyle } from "./style";

const DetailReviewItem = () => {
  return (
    <ReviewItemStyle>
      <div className="itemBox">
        <div className="box">
          <div className="grade-star">
            <span></span>
          </div>
          <div className="review">
            <div className="photo"></div>
            <div className="txt">
              <p>
                단맛은 점점 나아지는것 같긴한데 아주 달다 느낌은 아니지만
                지금까지 먹은것 중에서는 제일 나아요.
              </p>
            </div>
            <div className="like">
              <button>0</button>
              <span>리뷰가 도움이 되었나요?</span>
            </div>
          </div>
          <div className="info">
            <span className="id">der*****</span>
            <span className="date">2023.09.15</span>
          </div>
        </div>
      </div>
    </ReviewItemStyle>
  );
};

export default DetailReviewItem;
