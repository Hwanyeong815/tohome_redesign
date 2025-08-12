import styled from 'styled-components';

export const FloatingBtnStyle = styled.div`
    z-index: 100;

    position: fixed;
    top: 250px;
    right: 60px;
    width: 80px;
    /* height: 300px; */
    /* border: 1px solid #000; */
    div {
        background-color: white;
        height: 150px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
        border-radius: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
            gap: 5px;
            align-items: center;
            /* height: 50px; */
            text-align: center;
            font-size: 13px;
            img {
                width: 30px;
                margin-top: 10px;
            }
        }
    }
    .top {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 10px;
        background-color: transparent;
    }
`;
export const FloatingMenuStyle = styled.div`
    z-index: 10;
    position: absolute;
    top: 270px;
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
`;
