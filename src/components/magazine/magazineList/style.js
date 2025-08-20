import styled from 'styled-components';

export const MagazineListStyle = styled.div`
    width: 100%;
    height: 900px;
    position: relative;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    background-image: url('/images/magazine/back.jpg');

    &::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 100%;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        background-color: #333;
        z-index: 1;
    }
    .left {
        width: 50%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        padding: 90px 70px;
        box-sizing: border-box;
        .img-wrap {
            width: 150px;
            height: 95px;
            overflow: hidden;
            position: relative;
            img {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 50%;
                transition: 0.3s;
                &:hover {
                    transform: translate(-50%, -50%) scale(1.3);
                    cursor: pointer;
                }
            }
        }
    }
    .right {
        width: 50%;
        height: 100%;
        position: relative;
        &-title {
            width: 100%;

            position: absolute;
            bottom: 100px;
            box-sizing: border-box;
            h2 {
                font-size: 50px;
                font-family: 'Playfair Display' !important;
                font-weight: 400;
                font-style: italic;
                text-align: left;
                padding-left: 102px;
            }
            h3 {
                font-size: 25px;
                text-align: center;
            }
            h4 {
                margin-top: 30px;
                font-size: 32px;
                font-weight: 600;
                text-align: center;
                span {
                    font-size: 20px;
                    margin-right: 15px;
                }
            }
        }
        &-high {
            position: absolute;

            font-size: 15px;
            left: 40px;
            top: 350px;
            /* height: 100%; */
            /* width: 100%; */

            h3 {
                transform-origin: left center;
                transform: rotate(-90deg);
            }
        }
        &-main-images-wrap {
            width: 100%;
            height: 100%;

            position: relative;

            img {
                position: absolute;
            }
            .recipe {
                &-meshpotato {
                    top: 265px;
                    right: 110px;
                }
                &-potato {
                    top: 180px;
                    right: 260px;
                }
                &-basil {
                    right: 45px;
                    bottom: 165px;
                }
                &-cheese {
                    bottom: 380px;
                    left: 200px;
                }
                &-lemon {
                    top: 250px;
                    left: 250px;
                }
                &-yogurt {
                    right: 134px;
                    top: 220px;
                }
                &-parsley {
                    top: 350px;
                    left: 180px;
                }
                &-blueberry {
                    bottom: 275px;
                    left: 50px;
                }
                &-eucalyptus {
                    left: 80px;
                    top: 0px;
                }
            }
        }

        .more {
            &:hover {
                img {
                    transform: translateX(-50%);
                }
            }
            z-index: 100;
            cursor: pointer;
            position: absolute;
            font-size: 18px;
            right: 30px;
            top: 50px;
            background-color: transparent;
            height: 25px;
            display: flex;
            align-items: center;
            gap: 20px;
            img {
                height: 100%;
                transition: 0.3s;
            }
        }
    }
`;
