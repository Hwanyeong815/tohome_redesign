import React from 'react';
import { MyPageStyle } from './style';
import MyPageItem from '../../components/mypage/MyPageItem';

const MyPage = () => {
    return (
        <MyPageStyle>
            <div className="inner">
                <h2>마이페이지</h2>

                <MyPageItem />
            </div>
        </MyPageStyle>
    );
};

export default MyPage;
