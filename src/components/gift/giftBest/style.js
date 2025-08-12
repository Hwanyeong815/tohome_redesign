import styled from 'styled-components';

export const GiftBestWrap = styled.div`
    background-color: #fdfdf0;
    padding: 100px 0;
    section {
        width: 1440px;
        margin: auto;
        h2 {
            text-align: center;
            font-size: 25px;
            margin-bottom: 30px;
        }
    }
`;
export const GiftBestListWrap = styled.ul`
    display: flex;
    gap: 40px;
    width: 1440px;
    overflow: hidden;
    li {
        width: 400px;
        border-bottom: 1px solid #333;
        padding-bottom: 10px;
        .best-img {
            position: relative;
            margin-bottom: 20px;
            cursor: pointer;
            img {
                width: 400px;
            }
        }
        .ranking {
            position: absolute;
            left: 20px;
            top: 20px;
            width: 70px;
            height: 70px;
            background-color: #3c6039;
            color: #fff;
            font-size: 55px;
            text-align: center;
            line-height: 1.3;
        }
        h3 {
            font-size: 18px;
            word-break: keep-all;
            white-space: pre-line;
        }
        .price-box {
            text-align: right;
            .discount {
                font-size: 15px;
                color: #999;
                text-decoration: line-through;
            }
            .price {
                font-size: 17px;
                span {
                    color: #ff7259;
                    font-size: 15px;
                    margin-right: 8px;
                }
            }
        }
    }
`;
