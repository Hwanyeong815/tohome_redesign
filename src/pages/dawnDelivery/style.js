import styled from 'styled-components';

export const DawnDeliveryStyle = styled.div`
    margin-top: 100px;
`;
export const BannerStyle = styled.div`
    position: relative;
    height: 900px;
    img {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .txt-box {
        position: absolute;
        width: 610px;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 320px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        h2 {
            padding: 0;
            margin-bottom: 15px;
            font-size: 36px;
            font-weight: 700;
        }
        span {
            font-size: 20px;
            margin-bottom: 60px;
            font-weight: 500;
        }
        p {
            font-size: 24px;
            font-weight: 500;
            &:nth-of-type(1) {
                margin-bottom: 15px;
            }
        }
    }
`;
