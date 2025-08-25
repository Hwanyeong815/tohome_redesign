<<<<<<< HEAD
import React from 'react';
import DetailReviewList from './DetailReviewList';
import { DetailArtReviewStyle } from './style';
import { useNavigate } from 'react-router-dom';

const DetailReview = () => {
    // const { authed } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const onMake = () => {
        if (authed) {
            navigate(`/product/productdetail/detailreviewadd`);
        } else {
            navigate(`/login`);
        }
    };
=======
import React, { useMemo } from 'react';
import DetailReviewList from './DetailReviewList';
import { DetailArtReviewStyle } from './style';
import { useSelector } from 'react-redux';

const DetailReview = () => {
    const { reviews } = useSelector((state) => state.support) || { reviews: [] };
    const list = Array.isArray(reviews) ? reviews : [];

    const avgRate = useMemo(() => {
        if (list.length === 0) return 0;
        const sum = list.reduce((acc, r) => acc + (Number(r?.rate) || 0), 0);
        return Number((sum / list.length).toFixed(1));
    }, [list]);
>>>>>>> e652e0925ede9dbcaf5aab8bce0bfda96974a649

    return (
        <DetailArtReviewStyle>
            <div className="reviewTop">
                <div className="grade-star">
                    <span></span>
                    <strong>
<<<<<<< HEAD
                        <em>4.5</em>
=======
                        <em>{avgRate}</em>
>>>>>>> e652e0925ede9dbcaf5aab8bce0bfda96974a649
                        <i className="bar">/</i>5
                    </strong>
                </div>
                <div className="reviewBtn">
                    <button>리뷰 작성</button>
                </div>
            </div>
<<<<<<< HEAD
            <DetailReviewList />
=======
            <DetailReviewList reviews={list} avgRate={avgRate} />
>>>>>>> e652e0925ede9dbcaf5aab8bce0bfda96974a649
        </DetailArtReviewStyle>
    );
};

export default DetailReview;
