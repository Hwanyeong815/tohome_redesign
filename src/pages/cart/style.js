import styled from 'styled-components';

export const CartWrap = styled.div`
    .inner {
        padding: 100px;
    }
    h2 {
        font-size: 30px;
    }
    p {
        text-align: center;
    }
    .steps {
        display: flex;
        .box {
            display: flex;
            width: 145px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* border: 1px solid #000; */
        }
        .dot {
            &.on {
                background: #2f592b;
                border: 10px solid #2f592b;
            }
            display: flex;
            box-sizing: border-box;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            border: 10px solid #b1b1b1;
        }
        .txt {
            &.on {
                color: #2f592b;
            }
            margin-top: 20px;
            font-size: 20px;
            font-weight: 500;
            display: flex;
        }
        .line {
            background: #b1b1b1;
            height: 3px;
            width: 390px;
            margin-top: 14px;
        }
    }

    .menu {
        display: flex;
        justify-content: center;
        
        ul {
            display: flex;
            gap: 20px;
            li {
                padding: 18px 7px;
                border: 1px solid #000;
            }
        }
    }
`;
