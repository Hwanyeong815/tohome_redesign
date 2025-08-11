import styled from 'styled-components';

export const DawnDeliveryConStyle = styled.div`
    position: relative;
    /* margin-top: 90; */
    /* height: 1260px; */
`;
export const Con1Style = styled.div`
    margin-top: 110px;
    height: 1260px;
    h2 {
        font-size: 36px;
        font-weight: 700;
    }
    .box {
        width: 1440px;
        height: 940px;
        /* border: 1px solid; */
        .top {
            width: 100%;
            display: flex;

            .left {
                width: 720px;
                height: 470px;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
            .right {
                width: 720px;
                height: 470px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .txt {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 580px;
                    height: 198px;
                    /* border: 1px solid #000; */
                    p {
                        font-size: 24px;
                        text-align: center;
                        margin-bottom: 40px;
                    }
                    img {
                        margin-bottom: 30px;
                    }
                    span {
                        font-size: 18px;
                    }
                }
            }
        }
        .bottom {
            width: 100%;
            display: flex;
            .left {
                width: 720px;
                height: 470px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .txt {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 580px;
                    height: 232px;
                    /* border: 1px solid #000; */
                    p {
                        font-size: 24px;
                        text-align: center;
                        margin-bottom: 40px;
                    }
                    img {
                        margin-bottom: 30px;
                    }
                    span {
                        font-size: 18px;
                    }
                }
            }
            .right {
                width: 720px;
                height: 470px;
                overflow: hidden;
            }
        }
    }
`;

export const Con2Style = styled.div`
    /* margin-top: 55px; */
    height: 726px;
    background-color: #fdfbf0;
    width: 100%;
    /* border: 1px solid #000; */
    display: flex;

    justify-content: center;
    align-items: center;
    .box {
        width: 886px;
        height: 590px;
        /* border: 1px solid #000; */
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
            width: 80px;
            margin-bottom: 27px;
        }
        .box2 {
            width: 240px;
            height: 70px;
            background-color: #666;
            margin-bottom: 70px;
            p {
                height: 70px;
                justify-content: center;
                display: flex;
                align-items: center;
                color: #fff;
                font-size: 24px;
                font-weight: 700;
                text-align: center;
            }
        }
        .txt-box {
            img {
                /* margin-right: 10px; */
            }
            .txt {
                display: flex;
                align-items: center;
                gap: 15px;
                span {
                    font-size: 24px;
                }
            }
        }
    }
`;

export const Con3Style = styled.div`
    margin-top: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 100px;
    }
    .box {
        width: 1160px;
        height: 1641px;
        /* border: 1px solid #000; */
        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
            }
            .box1 {
                width: 494px;
                height: 310px;
                /* border: 1px solid #000; */
                p {
                    font-size: 34px;
                    margin-bottom: 23px;
                }
                .title {
                    font-size: 18px;
                    margin-bottom: 23px;
                    /* line-height: 300%; */
                }
                .text {
                    &:first-of-type {
                        margin-top: 23px;
                    }
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    span {
                        font-size: 18px;
                    }
                }
            }
        }
        .middle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
            }
            .box1 {
                width: 654px;
                height: 310px;
                /* margin-top: 170px; */
                /* border: 1px solid #000; */
                p {
                    font-size: 34px;
                    margin-bottom: 23px;
                }
                .title {
                    font-size: 18px;
                    margin-bottom: 23px;
                    /* line-height: 300%; */
                }
                .text {
                    &:first-of-type {
                        margin-top: 23px;
                    }
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    span {
                        font-size: 18px;
                    }
                }
            }
        }
        .bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
            }
            .box1 {
                width: 494px;
                height: 310px;
                /* border: 1px solid #000; */
                p {
                    font-size: 34px;
                    margin-bottom: 23px;
                }
                .title {
                    font-size: 18px;
                    margin-bottom: 23px;
                    /* line-height: 300%; */
                }
                .text {
                    &:first-of-type {
                        margin-top: 23px;
                    }
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    span {
                        font-size: 18px;
                    }
                }
            }
        }
    }
`;
