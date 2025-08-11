import { Con1Style, Con2Style, Con3Style, DawnDeliveryConStyle } from './style';

const DawnDeliveryCon = () => {
    return (
        <DawnDeliveryConStyle>
            <Con1Style>
                <h2>지역 맞춤 배송 안내</h2>
                <div className="box">
                    <div className="top">
                        <div className="left">
                            <img src="/images/dawnDelivery/con1/img1.png" alt="img1" />
                        </div>
                        <div className="right">
                            <div className="txt">
                                <p>새벽배송</p>
                                <img src="/images/dawnDelivery/con1/img2.png" alt="img2" />
                                <span>
                                    오늘 밤 11시 전 주문하시면 내일 아침 현관 앞에 도착합니다.
                                    <br />
                                    월요일부터 일요일까지 하루도 빠짐없이 투홈은 새벽을 부지런히
                                    달립니다.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="txt">
                                <p>택배배송</p>
                                <img src="/images/dawnDelivery/con1/img3.png" alt="img3" />
                                <span>
                                    오늘 저녁 6시 전 주문하시면 내일 오후 현관 앞에 도착합니다.{' '}
                                    <br />
                                    금요일 저녁 6시 ~ 일요일 저녁 6시 사이에 주문하신 상품은
                                    월요일에 도착합니다.
                                </span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="/images/dawnDelivery/con1/img4.png" alt="img4" />
                        </div>
                    </div>
                </div>
            </Con1Style>
            <Con2Style>
                <div className="box">
                    <img className="icon" src="./images/dawnDelivery/con2/icon1.png" alt="icon1" />
                    <div className="box2">
                        <p>Notice</p>
                    </div>
                    <div className="txt-box">
                        <div className="txt">
                            <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                            <span>
                                택배배송 지역인 경우 일반 택배를 통해 다음 날 오후까지 상품이
                                발송됩니다.
                            </span>
                        </div>
                        <div className="txt">
                            <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                            <span>
                                새벽배송은 공단, 학교, 학교 기숙사, 병원, 관공서에 배송할 수
                                없습니다.
                            </span>
                        </div>
                        <div className="txt">
                            <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                            <span>택배배송은 일부 도서·산간 지역에 배송할 수 없습니다.</span>
                        </div>
                        <div className="txt">
                            <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                            <span>
                                주문 물량의 증가로 배송 출발 시간이 다소 지연될 수 있습니다.
                            </span>
                        </div>
                        <div className="txt">
                            <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                            <span>명절, 공휴일은 택배사 사정에 따라 지연될 수 있습니다.</span>
                        </div>
                        <div className="txt">
                            <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                            <span>
                                상품에 따라 배송 일정이 다를 수 있으니 상품 상세페이지를 확인하시기
                                바랍니다.
                            </span>
                        </div>
                    </div>
                </div>
            </Con2Style>
            <Con3Style>
                <h2>투홈 패키지 안내</h2>
                <div className="box">
                    <div className="top">
                        <img src="./images/dawnDelivery/con3/img1.png" alt="img1" />
                        <div className="box1">
                            <p>투홈백</p>
                            <span className="title">
                                보냉백은 한 번 구매하면 계속 사용할 수 있으며,
                                <br />
                                새벽배송 시 현관 앞에 두면 신선식품을 담아드립니다.
                            </span>
                            <div className="text">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>안감까지 보냉처리해 신선해요</span>
                            </div>
                            <div className="text">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>폐 페트병을 재활용한 친환경 소재로 제작했어요</span>
                            </div>
                            <div className="text">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>접어서 보관이 가능해요</span>
                            </div>
                            <div className="text">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>종이박스 등 불필요한 포장재를 분리수거 할 필요가 없어요</span>
                            </div>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="box1">
                            <p>회수용 보냉백</p>
                            <span>
                                투홈백을 깜빡했나요? <br /> 회수용 보냉백이 대신합니다
                            </span>
                            <div className="text">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>
                                    투홈백 없이도, 냉기를 오래 유지하는 회수용 보냉백으로 신선하게
                                    받아보세요.
                                </span>
                            </div>
                            <div className="text">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>
                                    다음 주문 때 문 앞에 꺼내두면 현대식품관이 직접 회수해요.
                                </span>
                            </div>
                            <div className="text">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>일회용 포장 없이 더 친환경적으로 사용할 수 있어요.</span>
                            </div>
                        </div>
                        <img src="./images/dawnDelivery/con3/img2.png" alt="img2" />
                    </div>
                    <div className="bottom">
                        <img src="./images/dawnDelivery/con3/img3.png" alt="img3" />
                        <div className="box1">
                            <p>투홈백</p>
                            <span>
                                보냉백은 한 번 구매하면 계속 사용할 수 있으며, <br />
                                새벽배송 시 현관 앞에 두면 신선식품을 담아드립니다.
                            </span>
                            <div className="text">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>안감까지 보냉처리해 신선해요</span>
                            </div>
                            <div className="text">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>폐 페트병을 재활용한 친환경 소재로 제작했어요</span>
                            </div>
                            <div className="text">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>접어서 보관이 가능해요</span>
                            </div>
                            <div className="text">
                                <img src="./images/dawnDelivery/con2/check.png" alt="check" />
                                <span>종이박스 등 불필요한 포장재를 분리수거 할 필요가 없어요</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Con3Style>
        </DawnDeliveryConStyle>
    );
};

export default DawnDeliveryCon;
