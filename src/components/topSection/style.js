import styled from 'styled-components';
export const TitleBox = styled.div`
    border-top: ${(props) => (props.borderTop ? '1px solid #333' : 'none')};
    border-bottom: ${(props) =>
        props.borderBottom ? '1px solid #333' : 'none'};
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
