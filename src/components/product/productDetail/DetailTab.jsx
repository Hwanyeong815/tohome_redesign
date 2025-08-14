import React from 'react';
import { DetailTabStyle } from './style';

const DetailTab = () => {
    return (
        <DetailTabStyle>
            <ul>
                <li className="on">상세정보</li>
                <li>구매정보</li>
                <li>취소/교환/반품</li>
                <li>리뷰 283</li>
            </ul>
        </DetailTabStyle>
    );
};

export default DetailTab;
