import React from 'react';
import { GiftProductWrap } from './style';
import GiftList from './GiftList';

const GiftProduct = () => {
    return (
        <GiftProductWrap>
            <GiftList />
            {/* <button>더보기</button> */}
        </GiftProductWrap>
    );
};

export default GiftProduct;
