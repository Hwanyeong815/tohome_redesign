import styled from 'styled-components';

export const NewProductsWrap = styled.div`
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
        margin-bottom: 30px;
        p {
            cursor: pointer;
            position: relative;
            font-size: 15px;
            color: #666;
            margin-left: 20px;
            &.on {
                font-weight: 600;
                color: #3c6039;
            }
            &:not(:last-child) {
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
`;
