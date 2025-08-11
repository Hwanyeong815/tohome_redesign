import styled from 'styled-components';

export const MainRecomStyle = styled.div`
    /* background-color: aquamarine; */
    position: relative;
    & > h2 {
        position: absolute;
        top: 70px;
        z-index: 10;
    }
    h3 {
        /* padding-top: 100px !important; */
        padding-bottom: 0;
        position: absolute;
        top: 135px;
    }
    .swiper {
        width: 100vw;
        margin-left: calc(-50vw + 720px);
    }
    .swiper-slide {
        display: flex;
        flex-direction: column;
        /* margin-top: 70px; */
        padding-top: 265px;
        margin-bottom: 95px;
        position: relative;
        section {
            user-select: none;
            display: flex;
            gap: 90px;
            align-items: center;
            word-break: keep-all;

            padding: 90px;

            .left {
                position: relative;
                width: 470px;
                padding-left: 80px;
                /* padding-right: 90px; */
                text-align: left;
                /* padding: 0 145px; */
                display: flex;
                flex-direction: column;

                strong {
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 10px;
                    color: #3c6039;
                }
                h2 {
                    text-align: left;
                    font-size: 30px;
                    font-weight: 600;
                    height: 72px;
                    margin-bottom: 40px;
                }
                h4 {
                    font-size: 32px;
                    padding: 55px 0;
                }
                p {
                    text-align: left;
                    white-space: pre-line;
                    font-size: 20px;
                    line-height: 160%;
                    position: relative;
                    font-weight: 500;
                    position: relative;
                    border-bottom: 1px solid #333;
                    margin-bottom: 15px;
                    /* &::before {
                        content: '';
                        position: absolute;
                    } */
                }
            }
            .right {
                width: 870px;
                /* height: 500px; */
                .img-box {
                    width: 870px;
                    height: 470px;
                    img {
                        width: 100%;
                    }
                }
                .txts {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    p {
                        width: 275px;
                        height: 55px;
                        line-height: 55px;
                        font-size: 20px;
                        text-align: left;
                        padding-left: 10px;
                        border-bottom: 1px solid #000;
                    }
                }
            }
        }
        .back {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            opacity: 20%;
            background-color: white;
        }
    }
    .swiper-pagination {
        display: none;
    }
`;
