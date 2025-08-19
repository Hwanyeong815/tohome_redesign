import React from 'react';
import { MagazineDetailItem4Style } from './style';

const MagazineDetailItem4 = () => {
    return (
        <MagazineDetailItem4Style>
            <h2 className="mag-title">으깬감자구이 조리방법</h2>
            <div className="icons">
                <div className="icon-wrap icon-wrap1">
                    <img src="/images/magazine/recipe1.png" alt="" />
                    <strong>
                        난이도
                        <span>쉬움</span>
                    </strong>
                </div>
                <div className="icon-wrap icon-wrap2">
                    <img src="/images/magazine/recipe2.png" alt="" />
                    <strong>
                        조리시간
                        <span>1시간 이상</span>
                    </strong>
                </div>
                <div className="icon-wrap icon-wrap3">
                    <img src="/images/magazine/recipe3.png" alt="" />
                    <strong>
                        메인 식재료
                        <span>채소와 과일</span>
                    </strong>
                </div>
            </div>
            <div className="bg">
                <img src="/images/magazine/con4-back.png" alt="" />
            </div>
            <div className="steps-wrap">
                <div className="steps steps1">
                    <div className="img-wrap">
                        <img src="/images/magazine/step1.png" alt="" />
                    </div>
                    <div className="txt">
                        <h2>Step1</h2>
                        <p>감자는 되도록 작은 알로 9~10알 준비하여 껍질째 깨끗이 씻어주세요.</p>
                        <em>
                            <span>TIP</span>
                            젓가락으로 감자를 찔러서 저항감 없이 푹 들어가면 익었다는 표시예요.
                        </em>
                    </div>
                </div>
                <div className="steps steps2">
                    <div className="img-wrap">
                        <img src="/images/magazine/step2.png" alt="" />
                    </div>
                    <div className="txt">
                        <h2>Step2</h2>
                        <p>
                            냄비에 찬물과 굵은 소금을 넣고 물을 끓여줍니다. 물이 끓으면 감자를 넣고
                            17~18분 삶아주세요.
                        </p>
                    </div>
                </div>
                <div className="steps steps3">
                    <div className="img-wrap">
                        <img src="/images/magazine/step3.png" alt="" />
                    </div>
                    <div className="txt">
                        <h2>Step3</h2>
                        <p>
                            에어프라이어 트레이에 올리브오일을 바르고, 일정한 간격으로 올려 둔 삶은
                            감자를 감자메셔나 컵을 이용해 지그시 눌러 으깨주세요.
                        </p>
                    </div>
                </div>
                <div className="steps steps4">
                    <div className="img-wrap">
                        <img src="/images/magazine/step4.png" alt="" />
                    </div>
                    <div className="txt">
                        <h2>Step4</h2>
                        <p>
                            으깬 감자 위에 올리브오일·구운소금·후추로 시즈닝합니다. 에어프라이어가
                            180~200℃로 예열되면 15분동안 구워주세요.
                        </p>
                    </div>
                </div>
                <div className="steps steps5">
                    <div className="img-wrap">
                        <img src="/images/magazine/step5.png" alt="" />
                    </div>
                    <div className="txt">
                        <h2>Step5</h2>
                        <p>
                            다시 꺼낸 뒤 에어프라이어를 온도 170℃로 낮추고, 감자를 뒤집어
                            올리브오일·구운소금·후추·파슬리· 파르미지아노 치즈를 조금씩 올립니다.
                            그리고 15분 더 구워주세요.
                        </p>
                    </div>
                </div>
                <div className="steps steps6">
                    <div className="img-wrap">
                        <img src="/images/magazine/step6.png" alt="" />
                    </div>
                    <div className="txt">
                        <h2>Step6</h2>
                        <p>
                            접시에 완성된 으깬 감자 구이를 놓고, 요거트와 송송 썬 쪽파를 살짝
                            올려주세요. 레몬을 함께 곁을이면 상큼하게 즐길 수 있어요.
                        </p>
                        <em>
                            <span>TIP</span>기호에 따라 페퍼론치노 또는 크러시드 레드페퍼로 매운맛을
                            더해보세요.
                        </em>
                    </div>
                </div>
            </div>
            {/* <div className="back-imgs">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div> */}
        </MagazineDetailItem4Style>
    );
};

export default MagazineDetailItem4;
