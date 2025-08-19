import styled from 'styled-components';

export const FooterStyle = styled.footer`
    margin-top: 150px;
    height: 670px;
    background-color: #f1f1ef;

    .inner {
        padding-top: 95px;
    }
    .copyright {
        font-size: 15px;
        font-weight: 500;
        text-align: center;
        padding: 26px 0;
        border-top: 1px solid #333;
    }
`;

export const FooterBodyUl = styled.ul`
    display: flex;
    justify-content: space-between;

    li {
        &:nth-child(1) {
            display: flex;
            flex-direction: column;
            gap: 50px;
            div {
                width: 300px;
                color: #333;
                position: relative;
                &:nth-child(2) {
                    padding-bottom: 15px;
                    & > img {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                    }
                }

                em {
                    font-size: 15px;
                    font-weight: 500;
                    position: relative;

                    &::after {
                        content: '';
                        background-color: #333;
                        width: 234px;
                        height: 1px;
                        left: 120%;
                        top: 50%;
                        transform: translateY(-50%);
                        position: absolute;
                    }
                }
                strong {
                    font-size: 34px;
                    font-weight: 600;
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    align-items: center;
                }
                p {
                    text-align: center;
                    font-size: 20px;
                }
                h5 {
                    font-size: 15px;
                    font-weight: 500;
                    margin-left: 10px;
                }
            }
        }
    }
    .links {
        width: 250px;
        height: 210px;
        section {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            & > img {
                filter: invert();
                width: 100%;
            }
            div {
                display: flex;
                justify-content: space-around;
            }
        }
    }
    .utill {
        width: 300px;

        .option {
            text-align: center;
        }
        div:not(.option) {
            margin-top: 20px;
            border-top: 1px solid #333;
            display: flex;
            flex-direction: column;
            padding: 0 50px;
            padding-top: 20px;
            em {
                display: flex;
                justify-content: space-between;
            }
        }
    }
`;

export const FooterInfoUl = styled.ul`
    margin: 50px auto;
    font-size: 12px;
    text-align: center;
    width: 1060px;
    word-break: keep-all;
    li {
        margin-bottom: 20px;
        display: flex;
        align-content: center;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        &:nth-child(1) {
            font-weight: 600;
        }
        &:nth-child(2) {
            div {
                display: flex;
                justify-content: center;
                gap: 30px;
            }
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        &:nth-child(3) {
            font-weight: 500;
        }
    }
`;
