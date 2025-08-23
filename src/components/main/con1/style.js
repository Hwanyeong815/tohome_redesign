import styled from 'styled-components';

export const MainCon1Style = styled.article`
    .inner {
        overflow: hidden;
    }
    .main-best-wrap {
        .ul {
            cursor: grab;
            white-space: nowrap;
            &:active {
                cursor: grabbing;
            }
            display: flex;
            overflow-x: auto;
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE 10+ */

            li {
                box-sizing: border-box;
                height: 410px;
                width: 310px;
                position: relative;
                h2 {
                    margin-top: 20px;
                    width: 310px;
                    height: 60px;
                    white-space: break-spaces;
                    text-align: left;
                }
                h3 {
                    font-size: 15px;
                    white-space: pre-line;
                    word-break: keep-all;
                    /* padding: 0 10px; */
                }

                p {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    margin-top: 30px;
                    font-size: 15px;
                    text-align: left;
                    padding-left: 10px;
                    padding-bottom: 5px;
                    border-bottom: 1px solid #000;
                }
                .img-box {
                    width: 100%;
                    height: 240px;
                    overflow: hidden;
                    position: relative;
                    img {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);

                        width: 100%;
                        /* height: 100%; */
                    }
                }
            }
        }
    }
    .main-newPro-wrap {
        margin-top: 50px;
        padding-bottom: 10px;

        .swiper-slide {
            display: flex;

            margin-bottom: 95px;

            .left {
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    background-image: url('images/main/main_gradient.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                    width: 540px;
                    height: 540px;
                    left: 190px;
                    top: 0;
                    z-index: -1;
                }
                text-align: left;
                margin: auto;
                strong {
                    font-size: 18px;
                    margin-bottom: 10px;
                    color: #3c6039;
                }
                h2 {
                    text-align: left;
                    font-size: 50px;
                }
                h4 {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 32px;
                    padding: 55px 0;
                }
                p {
                    text-align: left;

                    font-size: 22px;
                }
            }
            .right {
                width: 750px;
                height: 500px;
                img {
                    width: 100%;
                }
            }
        }
        .swiper-pagination {
            bottom: 5px;
            right: 0px;
            text-align: right;
            width: auto;
            position: absolute;
        }
        .swiper-pagination-bullet {
            margin-right: 100px;
            bottom: 0px;
            width: 30px;
            height: 5px;
            background-color: #ccc;
            opacity: 1;
            border-radius: 0px;
            margin: 0 6px;
            transition: 0.3s;
        }

        .swiper-pagination-bullet-active {
            background-color: #333;
            transform: rotate(-45deg);
        }
    }
    @media screen and (max-width: 600px) {
        width: 100vw;
        .main-best-wrap {
            padding: 0 4.1026vw;
            width: 100vw;
            .productWrap {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                width: 100vw;
                flex-wrap: wrap;
                gap: 3.0769vw;
                .product-list {
                    justify-content: flex-start;
                }

                .img-wrap {
                    margin-bottom: 2.0513vw;
                }
                .price-box {
                    flex-direction: row !important;
                    .price {
                        display: block;
                        width: 170px;
                        text-align: right;
                        padding-bottom: 0;
                        border-bottom: none;
                        padding-left: 0;
                    }
                    .discount {
                        display: block;
                        border-bottom: none;
                        padding-bottom: 0;
                    }
                    .des {
                        display: none;
                    }
                }
                li {
                    width: 43.5897vw;
                    min-width: 43.5897vw;
                    height: 70.7692vw;
                    h2 {
                        font-size: 3.5897vw;
                        margin-top: 0;
                    }
                    h3 {
                    }
                    p {
                        display: block;
                    }
                    .img-box {
                        width: 43.5897vw;
                        height: 51.2821vw;
                        img {
                            width: 43.5897vw;
                            height: 51.2821vw;
                        }
                    }
                }
            }
        }
        .main-newPro-wrap {
            width: 100vw;
            /* height: 66.6667vw; */
            .swiper-slide {
                .left {
                    position: absolute;
                    z-index: 2;
                    display: flex;
                    justify-content: center;
                }
                .right {
                    position: relative;
                    z-index: 1;
                    width: 100vw;
                    height: 66.6667vw;
                    img {
                        width: 100vw;
                        height: 66.6667vw;
                    }
                }
            }
        }
    }
`;
