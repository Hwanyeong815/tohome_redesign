import styled from 'styled-components';

export const GiftProductWrap = styled.div`
    width: 1500px;
    margin: auto;
    padding: 150px 0;
    button {
        font-size: 12px;
        color: #888;
        background-color: #fff;
        border: 1px solid #888;
        width: 135px;
        height: 40px;
    }
`;

export const GiftListWrap = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 62px;
    li {
        width: 250px;
        padding-bottom: 10px;
        border-bottom: 1px solid #333;
        margin-bottom: 18px;
        .img-wrap {
            position: relative;
            overflow: hidden;
            img {
                width: 250px;
                margin-bottom: 15px;
                display: block;
            }
            .overlay {
                position: absolute;
                background-color: rgba(0, 0, 0, 0.4);
                left: 0;
                top: 0;
                width: 250px;
                height: 300px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
                opacity: 0;
                transition: 0.3s ease;
                &:hover {
                    opacity: 1;
                }
                .icon-btn {
                    width: 45px;
                    height: 45px;
                    border-radius: 10px;
                    border: 1px solid #fff;
                    background: transparent;
                    color: #fff;
                    font-size: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
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
