import React from 'react';
import DetailReviewItem from './DetailReviewItem';
import { ReviewListStyle } from './style';
import { useSelector } from 'react-redux';

const DetailReviewList = () => {
    const { reviews } = useSelector((state) => state.support);

    return (
        <ReviewListStyle rate={reviews.rate}>
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
            {reviews.map((review) => (
                <DetailReviewItem key={review.id} review={review} />
            ))}
        </ReviewListStyle>
    );
};

export default DetailReviewList;
