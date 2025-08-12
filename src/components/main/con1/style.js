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
                    white-space: break-spaces;
                    text-align: left;
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
            gap: 100px;
            margin-bottom: 95px;

            .left {
                width: 400px;
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
                /* padding: 0 145px; */
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
                    font-size: 32px;
                    padding: 55px 0;
                }
                p {
                    text-align: left;
                    white-space: pre-line;
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
    /* ul {
        display: flex;
        li {
            width: 240px;
            h2 {
                font-size: 20px;
                font-weight: 600;
                text-align: left;
                word-break: keep-all;
            }
            p {
            }
            img {
                width: 100%;
            }
        }
    } */
`;

// .mySwiper {
//   padding: 20px;
//   max-width: 600px;
//   margin: 0 auto;
//   background-color: #fafafa;
//   border-radius: 8px;
//   box-sizing: border-box;
// }

// /* 슬라이드 안 컨텐츠 여백 */
// .slideContent {
//   padding: 10px;
// }
