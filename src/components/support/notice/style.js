import styled from 'styled-components';

export const NoticeStyle = styled.article`
    margin-top: 127px;
    h2 {
        font-size: 32px;
        text-align: left;
        border: 1px solid #000;
    }
    .select {
        display: flex;
        height: 86px;
        padding: 0 40px;
        p {
            font-size: 20px;
            color: #7e7e7e;
            margin-right: 10px;
        }
    }
`;

export const NoticeListStyle = styled.div`
    caption {
        display: none;
    }
    col {
        &.num {
            width: 110px;
        }
        &.tit {
            width: 1190px;
        }
        &.date {
            width: 140px;
        }
    }
    thead {
        tr {
            th {
                font-size: 16px;
                text-align: center;
                font-weight: 500;
                height: 50px;
                line-height: 50px;
                border-bottom: 1px solid #3f3f3f;
                border-top: 2px solid #3f3f3f;
            }
        }
    }
    tbody {
        tr {
            td {
                font-size: 16px;
                &:not(:nth-child(2)) {
                    text-align: center;
                }
                font-weight: 500;
                height: 70px;
                line-height: 70px;
                border-bottom: 1px solid #b1b1b1;
            }
        }
    }
`;
