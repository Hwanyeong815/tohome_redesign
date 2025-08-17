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
`;
