import styled from 'styled-components';

export const MainRecomStyle = styled.div`
    background-color: aquamarine;
    h3 {
        background-color: antiquewhite;
    }
    .swiper-slide {
        background-color: antiquewhite;
        display: flex;
        flex-direction: column;
        margin-bottom: 95px;
        section {
            display: flex;
            word-break: keep-all;
            .left {
                position: relative;
                width: 470px;
                padding-right: 90px;
                text-align: left;
                padding: 0 145px;
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
                    /* text-decoration: underline;
                    text-underline-position: under; */
                }
                .underline {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 0%;
                    width: 470px;
                    /* height: 160px; */
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
    }
`;
