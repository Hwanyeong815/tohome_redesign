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
        /* position: relative; */
        .top {
            /* position: absolute; */
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
            }
            .box1 {
                width: 494px;
                height: 310px;
                /* border: 1px solid #000; */
                right: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;

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
                display: flex;
                flex-direction: column;
                justify-content: center;
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
                display: flex;
                flex-direction: column;
                justify-content: center;
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

export const Con4Style = styled.div`
    margin-top: 180px;
    width: 100%;
    height: 1185px;
    background-color: #fdfbf0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        margin-top: 100px;
        font-size: 36px;
        font-weight: 700;
    }
    p {
        font-size: 30px;
        font-weight: 700;
    }
    .box {
        height: 870px;
        border: 1px solid;
        width: 1200px;
        .txt {
            margin-bottom: 15px;
            .left {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                .qNum {
                    font-size: 25px;
                    font-weight: 700;
                }
                .bubbleQ {
                    position: relative;
                    background: #2c5428;
                    color: #fff;
                    padding: 28px 50px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    font-size: 20px;
                    &::before {
                        content: '';
                        position: absolute;
                        left: -6px;
                        top: 50%;
                        transform: translateY(-50%) rotate(45deg);
                        width: 12px;
                        height: 12px;
                        background: #2c5428;
                        border-radius: 2px; /* 살짝 둥근 꼬리 */
                    }
                }
            }
            .right {
                display: flex;
                align-items: center;
                gap: 10px;
                justify-content: flex-end;
                margin-top: 10px;
            }
            .aNum {
                font-size: 25px;
                font-weight: 700;
                display: flex;
                right: 0;
            }
            .bubbleA {
                position: relative;
                background: #fff;
                border: 1px solid #b1b1b1;
                color: #000;
                font-size: 18px;
                padding: 28px 60px;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                &::before {
                    content: '';
                    position: absolute;
                    right: -6px;
                    top: 50%;
                    transform: translateY(-50%) rotate(45deg);
                    width: 12px;
                    height: 12px;
                    background: #fff;
                    //   border: 1px solid #b1b1b1;
                    border-right: 1px solid #b1b1b1;
                    border-bottom: 1px solid #b1b1b1;
                    border-radius: 2px; /* 살짝 둥근 꼬리 */
                }
            }
        }
    }
`;
