import styled from 'styled-components';

export const CustomerStyle = styled.div`
    margin-top: 160px;
    h2 {
        font-size: 32px;
        text-align: left !important;
        height: 100px;
        line-height: 100px;
        margin-bottom: 20px;

        span {
            color: #9e9e9e;
            margin-left: 20px;
            position: relative;
            &:after {
                content: '';
                position: absolute;
                width: 2px;
                height: 30px;
                background-color: #9e9e9e;
                left: -10px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
`;
export const CustomerListStyle = styled.div`
    /* background-color: beige; */
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

export const CustomerDetailStyle = styled.div`
    margin-top: 100px;
    .detail {
        &-wrap {
        }
        &-head {
            h2 {
                font-size: 32px;
                font-weight: 600;
                text-align: left;
                span {
                    color: #9e9e9e;
                }
            }
        }
        &-body {
            .line {
                display: flex;
                justify-content: space-between;
                height: 60px;
                line-height: 60px;
                border-bottom: 1px solid #333;
                .col1,
                .col3 {
                    width: 120px;
                    text-align: center;
                }
                .col2 {
                    width: 1200px;
                    text-align: left !important;
                    padding-left: 20px;
                }
                &3 {
                    padding: 30px 0;
                    background-color: #fbfbfb;
                }
            }
        }
        &-bottom {
            div {
                min-height: 60px;
            }
            .upload {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 16px;
                p {
                    display: flex;
                    gap: 10px;
                }
            }
            .checkbox {
            }
            .btn-wrap {
                display: flex;
                justify-content: end;
                gap: 20px;
                button {
                    width: 70px;
                    height: 40px;
                    background-color: #ececec;
                    &:first-child {
                        color: white;
                        background: #333;
                    }
                }
            }
        }
    }
`;
