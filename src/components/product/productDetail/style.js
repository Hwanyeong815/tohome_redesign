import styled from 'styled-components';

export const DetailSideStyle = styled.div`
    border-right: 1px solid #000;
    padding: 77px 40px;
    width: 568px;
    min-width: 568px;
    margin-right: 40px;
    .proInfo {
        width: 100%;

        .brandwrap {
            display: flex;
            width: 100%;
            .tag {
                display: flex;
                gap: 8px;
                span {
                    padding: 3px 7px;
                    border: 1px solid #000;
                    &:nth-child(2) {
                        color: #3c6039;
                        border: 1px solid #3c6039;
                    }
                }
            }
            .brand {
                display: flex;
                /* justify-content: center; */
                align-items: center;
                margin-left: 6px;
                gap: 2px;
                &::before {
                    content: '';
                    display: block;
                    justify-content: center;
                    border: 1px solid #333;
                    height: 15px;
                    background: #000;
                    margin-right: 8px;
                }
                span {
                    font-size: 13px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                }
                .icon {
                    width: 20px;
                    display: flex;
                    justify-content: center;
                }
            }
        }
        h2 {
            font-size: 24px;
            font-weight: 700;
            padding: 15px 0;
            display: flex;
            justify-content: flex-start;
        }
        .price {
            display: flex;
            flex-direction: column;
            strong {
                font-size: 25px;
                font-weight: 600;
            }
            span {
                font-size: 15px;
                font-weight: 500;
                color: #aea7a2;
            }
        }
        .detailInfo {
            margin-top: 15px;
            border-top: 1px solid #aea7a2;
            dl {
                /* border: 1px solid #000; */
                .infoItem {
                    display: flex;
                    padding: 15px 0;
                    border-bottom: 1px solid #e7e7e7;
                    font-size: 15px;
                    font-weight: 500;
                    &:nth-child(4) {
                        dd {
                            display: flex;
                            justify-content: flex-end;
                            gap: 72px;

                            p {
                                margin-right: 57px;
                            }
                            .deliveryInfo {
                                display: flex;
                                align-items: center;
                                gap: 5px;
                            }
                            span {
                                display: flex;
                                align-items: center;
                                font-size: 13px;
                            }
                            .icon {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-radius: 50%;
                                border: 1px solid #aea7a2;
                                width: 15px;
                                height: 15px;
                                color: #aea7a2;
                            }
                        }
                    }
                    &:nth-child(5) {
                        dd {
                            display: flex;
                            justify-content: flex-end;
                            gap: 54px;
                            p {
                                margin-right: 70px;
                                display: flex;
                                align-items: center;
                            }
                            .quantity {
                                width: 92px;
                                border: 1px solid #aea7a2;
                                padding: 7px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                gap: 17px;
                                border-radius: 3px;
                                button {
                                    background: none;
                                    display: flex;
                                }
                            }
                        }
                    }
                    dt {
                        width: 96px;
                        display: flex;
                        align-items: center;
                    }
                    dd {
                        font-size: 15px;
                        font-weight: 500;
                        flex: 1;
                    }
                }
            }
        }
        .totalPrice {
            width: 100%;
            display: flex;
            padding: 40px 0;
            justify-content: flex-end;
            align-items: center;
            gap: 15px;
            p {
                font-size: 16px;
                font-weight: 700;
            }
            strong {
                font-size: 25px;
                font-weight: 700;
            }
        }
        .buttonWrap {
            width: 100%;
            display: flex;
            gap: 5px;
            justify-content: flex-end;
            button {
                width: 190px;
                background: none;
                padding: 16px 60px;
                border: 1px solid #454545;
                font-size: 16px;
                font-weight: 700;
                background: #454545;
                color: #fff;
                &:nth-child(1) {
                    background: #fff;
                    color: #333;
                }
            }
        }
    }
`;

export const DetailTabStyle = styled.div`
    ul {
        display: flex;
        gap: 80px;
        li {
            font-size: 15px;
            font-weight: 700;
            padding: 25px 7px;

            &.on {
                color: #3c6039;
                border-bottom: 2px solid #3c6039;
            }
        }
    }
`;

export const DetailArtStyle = styled.div`
    padding: 22px 0;
    width: calc(1920px - 568px); /* 고정 폭 유지 필요 없으면 100%로 변경 가능 */
    min-width: 0; /* flex나 grid 부모에서 찌부림 방지 */

    /* 여기서 hidden 제거 */
    overflow: visible;

    /* Swiper 기본 래퍼에 스크롤 허용 */
    .swiper {
        overflow-x: auto; /* 가로 스크롤바 필요 시 */
        overflow-y: hidden;
    }

    /* 슬라이드 내용 */
    .detail-slide {
        width: 100%;
        min-width: 0;
    }
`;

export const DetailArtMainStyle = styled.div`
    .detailContent {
        display: flex;
    }
`;
