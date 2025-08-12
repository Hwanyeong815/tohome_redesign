import styled from 'styled-components';
export const TitleBox = styled.div`
    border-top: 1px solid;
    border-bottom: 1px solid;
    padding: 75px 0;
    text-align: center;
    width: 100%;
    h2 {
        font-size: 36px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        gap: 10px;
        margin-bottom: 30px;
        img {
            width: 45px;
            height: 45px;
        }
    }
    p {
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        color: #666;
        white-space: pre-line;
    }
`;
