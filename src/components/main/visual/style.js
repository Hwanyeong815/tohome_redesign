import styled from 'styled-components';

export const VisualStyle = styled.div`
    height: 680px;
    background-color: aliceblue;
    position: relative;
    margin-top: 50px;

    h2 {
        font-size: 30px;
    }
    p {
        text-align: center;
    }
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

export const BannerWrap = styled.article`
    cursor: grab;
    &:active {
        cursor: grabbing;
    }
    width: 100%;
    display: flex;
    flex-direction: ${({ $position }) => ($position === 'right' ? 'row-reverse' : 'row')};
    align-items: center;

    .txt-box {
        width: 720px;
        box-sizing: border-box;
        padding: 0 140px;
        color: #333;
        h3 {
            font-size: 34px;
            padding-bottom: 80px;
            text-align: left;
            position: relative;
            img {
                width: 300px;
            }
            &::after {
                content: '';
                position: absolute;
                bottom: 40px;
                left: 0;
                width: 45px;
                height: 1px;
                background-color: #333;
            }
        }
        p {
            text-align: left;
            font-size: 14px;
        }
    }
    .img-box {
        box-sizing: border-box;
        position: relative;
        width: 790px;
        height: 680px;
    }
    .more {
        margin-top: 40px;
        box-sizing: border-box;
        line-height: 40px;
        text-align: center;
        border: 1px solid #888;
        width: 135px;
        height: 40px;
        font-size: 12px;
        color: #888;
        transition: 0.2s;

        &:hover {
            background-color: #888;
            color: #fff;
            cursor: pointer;
        }
    }
    &.visual-con {
        &1 {
        }
        &2 {
            .img-box {
                padding: 45px 65px;
                box-sizing: border-box;
                display: flex;
                flex-wrap: wrap;
                gap: 50px;
                img {
                    width: 270px;
                    height: 270px;
                }
            }
        }
        &3 {
            .img-box {
                padding: 90px 0;
                img {
                    &:nth-child(1) {
                        width: 475px;
                    }
                    &:nth-child(2) {
                        width: 225px;
                        height: 200px;
                        position: absolute;
                        top: 130px;
                        right: 90px;
                    }
                    &:nth-child(3) {
                        width: 225px;
                        height: 200px;
                        position: absolute;
                        bottom: 110px;
                        right: 0;
                    }
                }
            }
        }
        &4 {
            .img-box {
                padding: 65px 85px;
                img {
                    &:nth-child(1) {
                        width: 550px;
                        height: 550px;
                    }
                    &:nth-child(2) {
                        width: 200px;
                        height: 200px;
                        position: absolute;
                        top: 100px;
                        left: 0;
                    }
                    &:nth-child(3) {
                        width: 215px;
                        height: 215px;
                        position: absolute;
                        bottom: 42px;
                        right: 0;
                    }
                }
            }
        }
        &5 {
            background-color: #fdfbf0;
            .img-box {
                padding: 45px 65px;
                box-sizing: border-box;
                display: flex;
                flex-wrap: wrap;
                gap: 50px;
                &-sub {
                    &:nth-child(1) {
                        width: 290px;
                    }
                    &:nth-child(3) {
                        width: 250px;
                        height: 250px;
                    }
                    width: 250px;
                    height: 250px;
                    overflow: visible;
                    position: relative;
                    img {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        height: 100%;
                    }
                }
            }
        }
    }
`;
