import styled from 'styled-components';

export const GiftPremiumWrap = styled.div`
    padding-top: 150px;
    margin: auto;
    h2 {
        margin-bottom: 30px;
        font-size: 25px;
    }
    button {
        font-size: 12px;
        color: #888;
        background-color: #fff;
        border: 1px solid #888;
        width: 135px;
        height: 40px;
        display: block;
        margin: 60px auto 0;
    }
`;

export const GiftPremiumListWrap = styled.ul`
    display: flex;
    gap: 40px;
    width: 1440px;
    flex-wrap: wrap;
    > li {
        border-bottom: 1px solid #333;
        padding-bottom: 10px;
    }
    li {
        width: 330px;
        .premium-img {
            height: 330px;
            overflow: hidden;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            img {
                width: 330px;
                cursor: pointer;
            }
        }
        h3 {
            font-size: 18px;
        }
        .price-box {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            .price-dsc {
                font-size: 13px;
                color: #3c6039;
                span {
                    border: 1px solid #3c6039;
                    padding: 3px 10px;
                    margin-right: 10px;
                }
            }
            .price {
                text-align: right;
                font-size: 17px;
            }
        }
    }
`;
