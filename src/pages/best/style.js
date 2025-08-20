import styled from 'styled-components';

export const BestWrap = styled.div`
    .top-wrap {
        position: relative;
        &::before {
            content: '';
            position: absolute;
            background-color: #333;
            width: 1200px;
            height: 1px;
            left: 50%;
            top: 53%;
            transform: translateX(-50%);
        }
    }
    .filter-wrap {
        display: flex;
        justify-content: end;
        margin-top: 70px;
        margin-bottom: 30px;
        p {
            cursor: pointer;
            position: relative;
            font-size: 15px;
            color: #666;
            &.on {
                font-weight: 700;
            }
            &:not(:last-child) {
                margin-right: 20px;
                &::after {
                    content: '';
                    position: absolute;
                    width: 1px;
                    height: 60%;
                    background-color: #666;
                    right: -10px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
    @media screen and (max-width: 600px) {
        width: 100vw;
        .top-wrap {
            width: 100vw;
            &::before {
                width: 91.7949vw;
            }
        }
        .filter {
            width: 100vw;
            display: flex;
            justify-content: flex-end;
            .filter-wrap {
                width: 18.4615vw;
                border-left: 1px solid #333;
                border-right: 1px solid #333;
                position: relative;
                cursor: pointer;
                overflow: hidden;
                display: flex;
                justify-content: center;
                margin-top: 0;
                p {
                    display: none;
                    font-size: 3.0769vw;
                    width: 100%;
                    padding: 4px 0;
                    text-align: center;
                    box-sizing: border-box;
                    &.on {
                        width: 18.4615vw;
                        font-size: 3.0769vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 0;
                    }
                    &:not(:last-child) {
                        &::after {
                            display: none;
                        }
                    }
                }
                &:hover,
                &:focus-within {
                    display: flex;
                    height: auto;
                    overflow: visible;
                    flex-direction: column;
                    gap: 2.0513vw;
                    justify-content: center;
                    width: 18.4615vw;
                    p {
                        font-size: 3.0769vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        margin-right: 0;
                    }
                }
            }
        }
    }
`;
