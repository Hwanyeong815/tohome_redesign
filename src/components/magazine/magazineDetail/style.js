import styled from 'styled-components';

export const MagazineDetailStyle = styled.div`
    background-image: url('/images/magazine/back.jpg');
    .fontChange {
        font-family: 'playfair display';
        font-style: italic;
    }
    .mag-title {
        font-size: 25px;
        font-weight: 600;
        height: 100px;
        padding-top: 50px;
        position: relative;
        width: max-content;
        margin: auto;
        &::before {
            content: '';
            background-image: url('/images/icon/icon_title.png');
            background-repeat: no-repeat;
            background-size: cover;
            position: absolute;
            width: 32px;
            height: 32px;
            left: -40px;
            top: 35%;
        }
    }
`;

export const MagazineDetailItem1Style = styled.div`
    box-sizing: border-box;
    position: relative;
    height: 900px;
    position: relative;
    .highTxt {
        cursor: pointer;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 70px 80px;
        box-sizing: border-box;
        p {
            font-size: 25px;
            font-weight: 600;
            &:last-child {
                font-size: 17px;
                font-weight: 500;
            }
        }
    }
    .main-box {
        width: 900px;
        height: 670px;

        margin-top: 180px;
        margin-left: 250px;
        margin: auto;
        position: relative;
        .txts {
            position: absolute;
            top: 288px;
            z-index: 10;

            /* opacity: 0;
            transform: translateX(-50px);
            animation: txtsSlideIn 0.8s forwards;
            animation-delay: 0.2s; */

            @keyframes txtsSlideIn {
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            h2 {
                font-style: italic;
                font-size: 72px;
                color: #000;
                padding-left: 28px;
            }
            h3 {
                font-size: 32px;
            }
            h4 {
                margin-left: 180px;
                font-size: 40px;
                font-weight: 600;
            }
            .more2 {
                margin-left: 100px;
                font-size: 18px;
                height: 22px;
                display: flex;
                align-items: center;
                gap: 20px;
                background-color: transparent;
                img {
                    height: 100%;
                    transform: rotate(90deg);
                }
            }
        }
        .img-wrap {
            position: absolute;
            right: 0;
            background-color: beige;
            width: 500px;
            height: 670px;
            border-radius: 670px;
            overflow: hidden;
            background-color: transparent;
            img {
                height: 100%;
                transform: translate(-15%, -2%) rotate(160deg);
            }
        }
    }
    .imgs {
        .img-box {
            position: absolute;
        }
        img {
            width: 100%;
        }
        .detail {
            &-tomato {
                width: 145px;
                height: 140px;
                top: 237px;
                right: 110px;
            }
            &-brocoli {
                width: 110px;
                height: 110px;
                top: 170px;
                left: 248px;
                transform: rotate(-60deg);
            }
            &-lemon {
                width: 110px;
                height: 110px;
                left: 75px;
                bottom: 120px;
            }
        }
    }
`;
export const MagazineDetailItem2Style = styled.div`
    margin-top: 50px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    gap: 76px;
    .chefs {
        margin-left: 170px;
        /* background-color: azure; */
        position: relative;
        .pathTxt {
            position: absolute;
            right: -50px;
            top: -50px;
        }
        img {
            /* &:nth-child(2) {
               
            } */
        }
    }
    .txts {
        width: 838px;
        margin-right: 126px;
        h2 {
            font-size: 30px;
        }
        h3 {
            text-align: center;
            font-size: 25px;
            margin: 40px 0;
            font-weight: 600;
        }
        p {
            text-align: center;
            font-size: 20px;
            line-height: 1.5;
        }
    }
`;
export const MagazineDetailItem3Style = styled.div`
    margin-top: 50px;
    box-sizing: border-box;
    position: relative;
    height: 800px;
    position: relative;
    overflow: hidden;
    .main-img {
        position: absolute;
        top: 255px;
        left: 50%;
        transform: translateX(-50%);

        width: 755px;
        height: 440px;
    }
    .img-box {
    }
    .detail-vectors {
        position: absolute;
        img {
            width: 100%;
        }
        &1 {
            left: 320px;
            top: 190px;
        }
        &2 {
            bottom: 63px;
            right: 450px;
        }
        &3 {
            right: 270px;
            bottom: 150px;
        }
        &4 {
            left: 500px;
            bottom: 30px;
        }
        &5 {
            top: 200px;
            right: 310px;
        }
        &6 {
            left: 172px;
            bottom: 110px;
        }
        &7 {
            top: 255px;
            right: 110px;
        }
        &8 {
            left: 170px;
            bottom: 230px;
        }
        &9 {
            right: 147px;
            bottom: 270px;
        }
        &10 {
            top: 130px;
            right: 540px;
        }
    }
`;
export const MagazineDetailItem4Style = styled.div`
    background-image: url('images/magazine/con4-back.png');
    background-position: 0 -110px;
    margin-top: 50px;
    box-sizing: border-box;
    position: relative;
    height: 1960px;

    padding: 0 150px;
    overflow: hidden;

    .bg {
        z-index: 1;
        position: absolute;
        top: 5%;
        left: -15%;
        width: 100%;
        height: 100%;
        opacity: 0.5;

        img {
        }
    }

    .icons {
        display: flex;
        justify-content: center;
        gap: 102px;
        .icon-wrap {
            display: flex;
            align-items: center;
            img {
                width: 40px;
                height: 40px;
                margin-right: 10px;
            }
            strong {
                font-size: 17px;

                span {
                    margin-left: 16px;
                    font-size: 20px;
                    font-weight: 600;
                }
            }
        }
    }
    .steps {
        z-index: 2;
        margin-top: 50px;
        display: flex;
        gap: 35px;
        &:nth-child(even) {
            flex-direction: row-reverse;
            .txt {
                align-items: flex-end;

                h2,
                p,
                em {
                    text-align: right;
                }
            }
        }
        .img-wrap {
            width: 196px;
            height: 196px;
            overflow: hidden;
            position: relative;
            img {
                width: 100%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }

        .txt {
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: center;
            h2 {
                font-weight: 700;
                text-align: left;
            }
            em {
                font-size: 17px;
                span {
                    color: white;
                    background-color: #3c6039;
                    margin-right: 10px;
                    padding: 8px;
                    border-radius: 40px;
                    height: 25px;
                }
            }
            p {
                word-break: keep-all;
                width: 350px;
            }
        }
        &-wrap {
        }
        &1 {
        }
        &2 {
        }
        &3 {
        }
        &4 {
        }
        &5 {
        }
        &6 {
        }
    }

    .back-imgs {
        img {
        }
    }
`;
