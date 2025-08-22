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
            gap: 6.1538vw;
            margin-bottom: 6.1538vw;
            button {
                width: 34.1026vw;
                height: 7.9487vw;
                font-size: 3.8462vw;
            }
        }
    }
`;
