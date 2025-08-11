import styled from 'styled-components';

export const Content3Style = styled.div`
    .main-about {
        &:hover {
            cursor: pointer;
            .main-about-btn {
                background-color: white;
                color: #333;
                border-color: white;
            }
        }
    }
    .main {
        &-about {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 450px;
            position: relative;
            width: 100vw;
            left: 50%;
            transform: translateX(-50%);
            img {
                width: 100%;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 0;
                z-index: -1;
            }

            h2 {
                margin-top: 50px;
                font-weight: 600;
                letter-spacing: 6px;
                color: white;
            }
            div {
                margin-top: 60px;
                p {
                    font-weight: 500;
                    font-size: 55px;
                    letter-spacing: 2.75px;
                    color: white;
                    width: 880px;

                    &:nth-child(1) {
                        text-align: left;
                    }
                    &:nth-child(2) {
                        text-align: right;
                    }
                }
            }

            &-btn {
                transition: 0.3s;
                margin: auto;
                width: 150px;
                height: 40px;
                background-color: transparent;
                color: white;
                border: 1px solid white;
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
            }
        }
    }
    .brand-about {
        margin-top: 150px;
        h2 {
            margin-bottom: 115px;
        }
        strong {
            font-size: 25px;
            font-weight: 700;
        }
        p {
            width: 1000px;
            line-height: 140%;
            margin-top: 25px;
            text-align: left;
            font-size: 25px;
            word-break: keep-all;
        }
        &-banner {
            cursor: pointer;
            margin-top: 75px;
            display: flex;
            /* gap: 10px; */
            .img-box {
                width: 360px;
                height: 360px;
                /* background-color: azure; */
                position: relative;

                &:hover {
                    img {
                        &:nth-child(2) {
                            width: 150px;
                            top: 150px;
                        }
                    }
                    p {
                        transform: translate(-50%, 0%);
                        opacity: 1;
                    }
                    button {
                        transform: translateY(0%);
                        opacity: 1;
                    }
                }

                img {
                    &:nth-child(1) {
                        width: 100%;
                    }
                    &:nth-child(2) {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 204px;
                        mix-blend-mode: screen;
                        transition: 0.3s;
                    }
                }
                p {
                    transition: 0.3s;
                    font-size: 15px;
                    font-weight: 600;
                    color: white;
                    position: absolute;
                    bottom: 100px;
                    text-align: center;
                    left: 50%;
                    transform: translate(-50%, 50%);
                    word-break: keep-all;
                    width: 180px;
                    opacity: 0;
                }
                button {
                    transition: 0.3s;
                    font-size: 15px;
                    font-weight: 600;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    bottom: 60px;
                    width: 100%;
                    height: 20px;
                    background-color: transparent;
                    transform: translateY(50%);
                    opacity: 0;

                    img {
                        width: 24px !important;
                        margin-left: 20px;
                    }
                }
            }
        }
    }
    .main-dawn-wrap {
        margin-top: 150px;
        width: 100%;
        height: 300px;
        overflow: hidden;
        position: relative;
        img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
        }
        .txts {
            position: absolute;
            left: 160px;
            top: 75px;
            display: flex;
            flex-direction: column;
            align-items: center;
            h2 {
                font-size: 36px;
                font-weight: 700;
                margin-bottom: 2px;
                display: flex;
                text-align: center;
                position: relative;
                padding-right: 45px;
                &::after {
                    content: '';
                    position: absolute;
                    background-image: url('images/icon/icon_dawnDelivery.png');
                    background-repeat: no-repeat;
                    background-size: cover;
                    width: 40px;
                    height: 40px;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
            p {
                font-size: 25px;
                font-weight: 500;
            }
        }
    }
`;
