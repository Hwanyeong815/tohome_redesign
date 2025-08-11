import styled from 'styled-components';

export const ContentStyle = styled.div`
    margin-top: 50px;
    min-height: 400px;
    .inner {
    }
    h2 {
        /* font-size: 30px; */
    }
    p {
        text-align: center;
    }

    .main-title {
        font-size: 25px;
        margin-top: 30px;
        text-align: left;
        margin-left: 40px;
        position: relative;
        font-weight: 600;

        &::before {
            content: '';
            background-image: url('/images/icon/icon_title.png');
            position: absolute;
            left: -42px;
            top: 50%;
            transform: translateY(-50%);
            /* background-position: 0 0; */
            background-repeat: no-repeat;
            background-size: contain;
            width: 35px;
            height: 35px;
        }
    }
    .sub-title {
        margin-top: 70px;
        margin-bottom: 100px;
        text-align: center;
        color: #666;
        font-size: 25px;
    }
    .all-btn {
    }
`;

export const ContentUl = styled.ul`
    display: flex;
    justify-content: space-between;

    li {
        width: 250px;
        height: 480px;
        .img-box {
            width: 250px;
            height: 310px;
            img {
                width: 100%;
            }
        }
        h2 {
            height: 55px;
            text-align: left;
        }
        p {
            text-align: right;
        }
        .price-wrap {
            display: flex;
            flex-direction: column;
            justify-content: end;
            height: 50px;
            font-size: 17px;
            font-weight: 600;
            .original-price {
                color: #888;
                text-decoration: line-through;
                font-size: 15px;
            }
            .discounted-price {
                font-size: 17px;
                .dis-rate {
                    font-size: 15px;
                    margin-right: 10px;
                    color: #ff7259;
                }
            }
        }
    }
`;
