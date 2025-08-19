import styled from 'styled-components';

export const ProductListStyle = styled.ul`
    width: 1440px;
    display: flex;
    flex-wrap: wrap;
    gap: 38px;
    justify-content: start;

    h2 {
        font-size: 20px;
    }
`;
export const ProductItemStyle = styled.li`
    width: 250px;
    height: 440px;
    box-sizing: border-box;
    border-bottom: 1px solid #333;
    margin-bottom: 65px;
    &:not(:nth-child(5n)) {
        margin-right: 9.5px;
    }

    .img-wrap {
        position: relative;
        overflow: hidden;

        img {
            width: 250px;
            height: 305px;
            margin-bottom: 15px;
            display: block;
        }
        .overlay {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.4);
            left: 0;
            top: 0;
            width: 250px;
            height: 305px;
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
                &:hover {
                    background-color: rgba(255, 255, 255, 0.66);
                }
            }
        }
    }
    h3 {
        font-size: 16px;
        height: 55px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .price-box {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: flex-end;
        text-align: right;
        .discount {
            font-size: 15px;
            color: #999;
            text-decoration: line-through;
            min-height: 24px;
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
    .des {
        font-size: 15px;
        margin-top: 20px;
        word-break: keep-all;
    }
`;

export const ProductDetailStyle = styled.div`
    padding: 60px 20px;
    display: flex;
`;

export const ProductTopStyle = styled.ul`
    width: 1200px;
    border-top: 1px solid;
    margin-top: 125px;
    margin: auto;
    padding-top: 30px;
    box-sizing: border-box;
    /* padding: 0 120px; */
    display: flex;
    justify-content: space-around;
    li {
        max-width: 90px;
        /* border: 1px solid #000; */
        white-space: nowrap;
        padding: 5px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${(props) => props.fontSize || '15px'};
    }
`;
