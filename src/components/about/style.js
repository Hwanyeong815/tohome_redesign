import styled from 'styled-components';

export const AboutTopWrap = styled.div`
    width: 100%;
    height: 899px;
    background-image: url('/images/about/about_bg.jpg');
    background-repeat: no-repeat;
    background-position: 0 0;
    margin-top: 50px;
    text-align: center;
    .about-logo {
        &::after {
            content: '';
            width: 45px;
            height: 1px;
            background-color: #333;
            display: block;
            margin: 25px auto 65px;
        }
        img {
            margin-top: 100px;
        }
    }
    .about-title {
        font-size: 34px;
        margin-bottom: 100px;
        span {
            color: #666;
        }
    }
    .about-text {
        width: 1000px;
        margin: auto;
        background-color: #fff;
        padding: 75px 0;
        p {
            line-height: 2;
        }
    }
`;

export const AboutSlideWrap = styled.div`
    height: 800px;
    position: relative;
    .btn-wrap {
        position: absolute;
        top: 50%;
        z-index: 100;
        width: 100%;

        button {
            position: absolute;
            font-size: 10px;
            font-family: 'Arita-buri-SemiBold';
            background-color: transparent;
            p {
                transition: 0.3s;
            }
            &::before,
            &::after {
                transition: 0.3s;
                content: '';
                position: absolute;
                top: -12px;
                width: 30px;
                height: 1px;
                background-color: #333;
            }
            &::before {
                left: 50%;
            }
            &::after {
                left: -40%;
            }
            &.prev {
                left: -30px;
                transform: rotate(-90deg);
            }
            &.next {
                right: -30px;
                transform: rotate(90deg);
            }
            &:hover {
                &::before {
                    transform: rotate(45deg);
                    transform-origin: left center;
                }
                &::after {
                    transform-origin: 100%;
                    transform: rotate(-45deg);
                }
                p {
                    transform: translateY(-100%);
                    opacity: 0;
                }
            }
        }
    }
`;

export const AboutSlideItem = styled.ul`
    width: 100%;
    display: flex;
    text-align: left;
    .AboutSlideDetail {
        width: 660px;
        margin-left: 100px;
        h4 {
            color: #3c6039;
            font-size: 28px;
            margin-bottom: 110px;
            span {
                background-color: #3c6039;
                color: #fff;
                width: 50px;
                height: 50px;
                line-height: 50px;
                display: inline-block;
                text-align: center;
                margin-left: 20px;
            }
        }
        strong {
            font-size: 34px;
            margin-bottom: 35px;
            display: block;
        }
        p {
            white-space: pre-line;
        }
    }
    .AboutMagazine {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        li {
            padding: 30px;
            width: 250px;
            border: 1px solid #888;

            small {
                font-size: 14px;
                border-bottom: 1px solid #888;
                padding-bottom: 10px;
            }
            .AboutBanner {
                margin-top: 20px;
                position: relative;
                p {
                    font-size: 14px;
                }
                img {
                    position: absolute;
                    right: 0;
                    top: 28%;
                    width: 28px;
                    height: 20px;
                }
            }
        }
    }
`;

export const AboutGotoWrap = styled.div`
    margin-top: 150px;
    h2 {
        font-size: 25px;
    }
`;
export const AboutLeft = styled.ul`
    border: 1px solid #888;
    border-radius: 0 0 35px 0;
    display: flex;
    margin-top: 60px;
    li {
        width: 860px;
        height: 350px;
        display: flex;
        align-items: center;
        &:last-child {
            width: 580px;
            border-radius: 0 0 33px 0;
        }
        .con-text {
            margin: auto 50px;
            h3 {
                font-size: 20px;
                border-bottom: 2px solid #333;
                width: 275px;
                margin-bottom: 10px;
                padding: 0 0 7px 10px;
            }
            .green-title {
                font-size: 14px;
                color: #3c6039;
                margin-bottom: 30px;
                margin-left: 10px;
            }
            p {
                line-height: 2;
                margin-left: 10px;
            }
        }
        .goto {
            color: #fff;
            font-size: 14px;
            border: 1px solid #fff;
            margin: auto;
            padding: 8px 35px;
            img {
                margin-left: 15px;
                margin-top: 4px;
            }
        }
    }
`;
export const AboutRight = styled.ul`
    border: 1px solid #888;
    border-radius: 0 0 0 35px;
    display: flex;
    margin-top: 60px;
    li {
        width: 860px;
        height: 350px;
        display: flex;
        align-items: center;
        &:first-child {
            width: 580px;

            border-radius: 0 0 0 33px;
        }
        .con-text {
            margin: auto 50px;
            h3 {
                font-size: 20px;
                border-bottom: 2px solid #333;
                width: 275px;
                margin-bottom: 10px;
                padding: 0 0 7px 10px;
            }
            .green-title {
                font-size: 14px;
                color: #3c6039;
                margin-bottom: 30px;
                margin-left: 10px;
            }
            p {
                line-height: 2;
                margin-left: 10px;
            }
        }
        .goto {
            color: #fff;
            font-size: 14px;
            border: 1px solid #fff;
            margin: auto;
            padding: 8px 35px;
            img {
                margin-left: 15px;
                margin-top: 4px;
            }
        }
    }
`;
