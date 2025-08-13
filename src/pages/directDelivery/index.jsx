import DeliveryList from '../../components/directDelivery/DeliveryList';
import TopSection from '../../components/topSection/TopSection';
import { DirectDeliveryWrap } from './style';

const DirectDelivery = () => {
    return (
        <DirectDeliveryWrap>
            <div className="inner">
                {/* <div className="titleBox">
                    <h2>
                        <img src="/images/directDelivery/icon/title.png" alt="" />
                        브랜드직송관
                    </h2>
                    <p>누군가의 손끝에서 시작된 정성이, 당신의 식탁 위에 도착합니다.</p>
                </div> */}

                <TopSection
                    title="브랜드직송관"
                    subtitle="누군가의 손끝에서 시작된 정성이, 당신의 식탁 위에 도착합니다."
                    borderBottom={true}
                    borderTop={true}
                />

                <div className="banner">
                    <div className="left">
                        <div className="points">
                            <div className="point">
                                <div className="title">
                                    <span>Point 1</span> 브랜드가 직접 선택한 신뢰 배송
                                </div>
                                <div className="desc">
                                    상품 준비 상황에 따라 브랜드가 직접 가장 최적의 배송 방법을
                                    선택해, 신선함과 품질을 그대로 전합니다.
                                </div>
                            </div>
                            <div className="row">
                                <div className="point">
                                    <div className="title">
                                        <span>Point 2</span> MD의 안목으로 고른 검증된 브랜드
                                    </div>
                                    <div className="desc">
                                        현대식품관 투홈 MD가 지금 가장 주목받는, 믿고 추천할 수 있는
                                        브랜드만을 엄선했습니다.
                                    </div>
                                </div>
                                <div className="point">
                                    <div className="title">
                                        <span>Point 3</span> 로컬의 맛, 한 번에 만나보는 미식의
                                        즐거움
                                    </div>
                                    <div className="desc">전국 맛집을 투홈에 다 담았습니다.</div>
                                </div>
                            </div>
                        </div>

                        <div className="notice">
                            <div className="words">
                                <p>브랜드직송 배송안내</p>
                                <span className="dot" />
                                <span>주문 후 1 ~ 3일 후 도착</span>
                                <span className="dot" />
                                <span>도착 가능 요일 : 화 ~ 토 (공휴일 제외)</span>
                            </div>
                            <span>
                                * 상품별로 배송일정이 다를 수 있으니 상품상세를 확인해주세요
                            </span>
                        </div>
                    </div>
                    <div className="right">
                        <img src="/images/directDelivery/bannerImg.png" alt="" />
                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li>전체보기</li>
                        <li>신선·곡물</li>
                        <li>조리·반찬</li>
                        <li>베이커리·디저트·간식</li>
                        <li>델리·그로서리</li>
                        <li>오일·장류·조미료</li>
                        <li>음료·차·커피</li>
                        <li>전통주·와인</li>
                        <li>아기·어린이</li>
                    </ul>
                </div>

                <DeliveryList />
            </div>
        </DirectDeliveryWrap>
    );
};

export default DirectDelivery;
