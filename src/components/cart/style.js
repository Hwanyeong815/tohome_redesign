import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    /* align-items: center; */
    gap: 55px;
    .left {
        /* flex: 1; */
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export const CartBoxStyle = styled.div`
    /* margin-top: 100px; */
    padding: 20px 0;
    border-top: 2px solid #000;
    width: 1000px;
`;

export const ItemBox = styled.div`
    display: flex;
    /* .subBox { */
    width: 1000px;
    height: 226px;
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
    box-sizing: border-box;
    display: flex;
    padding: 20px 0;
    align-items: flex-start;
    gap: 20px;
    .image {
        width: 180px;
        height: 186px;
        border: 1px solid #000;
        background: pink;
        margin-right: 20px;
    }
    .txt {
        display: flex;
        flex-direction: row;
        gap: 20px;
        p {
            font-size: 20px;
            font-weight: 500;
        }
        span {
            font-size: 14px;
            font-weight: 600;
        }
        .price {
            width: 150px;
            p {
                font-size: 18px;
            }
            span {
                display: flex;
                justify-content: center;
                font-size: 14px;
                color: #9e9e9e;
                text-decoration: line-through;
            }
        }
        .calc {
            width: 80px;
            display: flex;
            gap: 8px;
            justify-content: center;
            align-items: center;
            button {
                background: none;
                font-size: 18px;
            }
            .num {
                font-size: 20px;
            }
        }
        .purchase {
            width: 90px;
            height: 42px;
            /* padding: 10px; */
            background: #386633;
            display: flex;
            justify-content: center;
            text-align: center;
            button {
                background: none;
                font-size: 18px;
                font-weight: 500;
                color: #fff;
            }
        }
        .icons {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            font-size: 25px;
            .cancel {
                font-size: 30px;
            }
        }
    }
    /* } */
`;

export const OrderBoxStyle = styled.div`
    width: 1000px;
    border: 1px solid #000;
    padding: 28px 20px;
    .title {
        display: flex;
        gap: 10px;
        align-items: center;
        border-bottom: 1px solid #000;
        padding: 20px;
        width: 960px;
        p {
            font-size: 24px;
            font-weight: 600;
        }
        span {
            font-size: 16px;
            font-weight: 500;
        }
    }
    .forms {
        .form-row {
            display: flex;
            margin: 20px;
            gap: 10px;
            label {
                width: 170px;
                font-size: 16px;
                font-weight: 500;
            }
            .field-group {
                /* width: 270px; */
                height: 40px;
                input {
                    width: 270px;
                    height: 40px;
                }
            }
        }
    }
`;
export const OrderStyle = styled.div``;
