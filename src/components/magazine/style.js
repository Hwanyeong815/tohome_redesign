import styled from 'styled-components';

export const MagazineBottomStyle = styled.div`
    background-color: white;
    padding-top: 100px;
    .btn-wrap {
        display: flex;
        justify-content: end;
        gap: 30px;
        margin-bottom: 70px;
        button {
            width: 170px;
            height: 40px;
            border-radius: 50px;
            background-color: #3c6039;
            color: white;
            font-size: 17px;
            line-height: 17px;
        }
    }
    @media screen and (max-width: 600px) {
        background-color: white;
        margin-top: 0;
        padding: 0;

        .btn-wrap {
            justify-content: center;
            gap: 24px;
            margin-bottom: 24px;
            button {
                width: 133px;
                height: 31px;
                font-size: 15px;
            }
        }
    }
`;
