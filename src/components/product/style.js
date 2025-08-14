import styled from 'styled-components';

export const ProductStyle = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    .inner {
    }
    h2 {
        font-size: 20px;
    }
    display: flex;
    gap: 10px;
`;
export const ProductItemStyle = styled.li`
    width: 250px;
    padding-bottom: 10px;
    border-bottom: 1px solid #333;
    margin-bottom: 65px;
    .img-wrap {
        position: relative;
        overflow: hidden;
        width: 250px;
        margin-top: 15px;
        img {
            width: 250px;
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
    h2 {
        font-size: 18px;
        word-break: keep-all;
        white-space: pre-line;
        text-align: left;
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
`;

export const ProductDetailDiv = styled.div`
    background-color: pink;
`;
