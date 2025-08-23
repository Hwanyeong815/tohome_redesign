import styled from 'styled-components';

export const FloatingBtnStyle = styled.div`
    z-index: 100;
    position: fixed;
    top: 13vw;
    right: 3.1vw;
    width: 80px;

    div {
        background-color: white;
        height: 160px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
        border-radius: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        position: relative;
        padding: 10px 0;
        &::after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 50%;
            width: 80%;
            height: 1px;
            background-color: #000;
        }
        p {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
            align-items: center;
            /* height: 50px; */
            text-align: center;
            font-size: 13px;
            img {
                width: 30px;
            }
        }
    }
    .top {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-content: center;
        /* align-items: center; */
        width: 100%;
        gap: 10px;
        background-color: transparent;
        p {
            font-size: 16px;
        }
        span {
            font-size: 20px;
        }
    }
    .cart {
        font-size: 30px;
        height: 31px;

        position: relative;
        span {
            position: absolute;
            right: -10px;
            top: -10px;
            width: 24px;
            height: 24px;
            background-color: #f3829e;
            border-radius: 50px;
            line-height: 24px;
            text-align: center;
            color: white;
            font-size: 17px;
        }
    }
    @media screen and (max-width: 600px) {
        display: none;
    }
`;
export const FloatingMenuStyle = styled.div`
    z-index: 10;
    position: absolute;
    top: 220px;
    right: 20px;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.15);
    background-color: white;

    .item {
        &:hover {
            cursor: pointer;
            .txt-box {
                border-bottom: 1px solid #3c6039;
                p {
                    color: #3c6039;
                }
                img {
                    filter: brightness(0) saturate(100%) invert(30%) sepia(51%) saturate(370%)
                        hue-rotate(68deg) brightness(80%) contrast(90%);
                }
            }
        }
        .txt-box {
            border-bottom: 1px solid #fff;
            display: flex;
            align-items: center;
            padding: 10px 15px;
            margin: 10px 0px;
            p {
                font-weight: 500;
                font-size: 16px;
            }
            img {
                width: 24px;
                margin-right: 10px;
            }
        }
    }

    .mobile {
        &-logo-wrap,
        &-login-wrap,
        &-support-wrap {
            display: none;
        }
    }
    @media screen and (max-width: 600px) {
        left: -4.359vw;
        top: 0;
        margin: 0;
        padding: 6.1538vw;
        /* box-sizing: border-box; */
        width: 89.7436vw;
        height: 216.4103vw;
        border-radius: 0 20px 20px 0;

        .mobile {
            &-logo-wrap,
            &-login-wrap,
            &-support-wrap {
                display: block;
                box-sizing: border-box;
            }
        }
        .mobile {
            &-logo-wrap {
                display: flex;
                justify-content: space-between;
                align-content: center;
                align-items: center;
                height: 10.7692vw;
                &-img {
                    width: 42.3077vw;
                    img {
                        width: 100%;
                    }
                }
                p {
                    font-size: 8.9744vw;
                    line-height: 8.9744vw;
                    height: 5.7692vw;
                }
            }
            &-login-wrap {
                margin-top: 2.0513vw;
                &-list {
                    display: flex;
                    li {
                        font-size: 3.3333vw;
                        margin-right: 6.1538vw;
                    }
                }
                &-title {
                    margin-top: 10.2564vw;
                    padding-bottom: 6.1538vw;
                    h4 {
                        font-size: 4.1026vw;
                        span {
                            font-size: 5.1282vw;
                            color: #3c6039;
                        }
                    }
                    strong {
                        font-weight: 600;
                        font-size: 5.1282vw;
                    }
                }
            }
            &-support-wrap {
                margin-top: 24px;
                margin-bottom: 42px;
                display: flex;
                p {
                    font-size: 3.8462vw;
                    margin-right: 5.1282vw;
                    font-weight: 600;
                }
            }
        }
        .item {
            &-wrap {
                border-top: 0.2564vw solid #000;
                border-bottom: 0.2564vw solid #000;
                box-sizing: border-box;
                padding: 24px 0;
            }
            width: 75.1282vw;
            height: 10.2564vw;
            padding: 0;
            margin-top: 4.1026vw;

            .txt-box {
                padding: 2.0513vw 0;
                height: 100%;
                box-sizing: border-box;
                margin: 0;
                img {
                    width: 6.1538vw;
                    height: 6.1538vw;
                }
                p {
                    font-weight: 600;

                    font-size: 5.1282vw;
                }
            }
        }
    }
`;
