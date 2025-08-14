import React from 'react';
import { DetailArtMainStyle } from './style';

const DetailArtMain = () => {
    return (
        <DetailArtMainStyle>
            <div className="detailContent">
                <div className="mainImg">
                    <img src="/images/product/detailArt/mainImg.png" alt="" />
                </div>

                <div className="box1">
                    <div className="smallImg">
                        <img
                            src="/images/product/detailArt/smallImg1.png"
                            alt=""
                        />
                        <h2>이 계절, 가장 달큰한 수박</h2>
                        <p>
                            따스한 햇볕 아래서 즐기는 달큰한 수박만큼 시원한
                            과일은 없지요. <br />
                            날씨가 무더워지며 비로소 달콤하게 여무는 과일로,
                            다가오는 계절과 함께 이맘때면 <br /> 언제나
                            기다려집니다. 현대식품관이 엄선한 고당도 수박은 재배
                            시기에 따라 하남, <br /> 고령, 고창, 음성, 봉화,
                            양구 등 산지를 달리합니다. <br /> 그때마다 가장
                            달큰한 수박을 찾아 나서기 때문이죠. <br /> 비파괴
                            선과 방식으로 측정한 13Brix 이상의 검증된 달콤함을
                            맛보세요.
                        </p>
                    </div>
                </div>
                <div className="box2">
                    <div className="smallImg">
                        <img
                            src="/images/product/detailArt/smallImg2.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </DetailArtMainStyle>
    );
};

export default DetailArtMain;
