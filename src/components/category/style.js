import styled from 'styled-components';

export const CategoryTopWrap = styled.div`
    width: 1200px;
    margin: auto;
    text-align: center;
    border-bottom: 1px solid #666;
    h2.categoty-title {
        font-size: 36px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 75px 0 25px;
        img {
            display: block;
            margin-right: 15px;
        }
    }
`;

export const CategorySub = styled.ul`
    display: flex;
    width: 1200px;
    margin: 30px auto 0;
    justify-content: center;
    font-size: 15px;
    li {
        margin-left: 40px;
        cursor: pointer;
        &:first-child {
            margin-left: 0;
            color: #3c6039;
        }
        &.active {
            color: #386633;
        }
    }
`;

export const CategoryBoxWrap = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 100px 0;
`;
export const CategoryFilterWrap = styled.div`
    width: 250px;
    h3 {
        font-size: 25px;
    }
    .filter-section {
        padding-bottom: 20px;
        h4 {
            font-size: 15px;
            margin: 30px 0 15px;
        }
        li {
            font-size: 14px;
            margin-bottom: 5px;
        }
        label {
            display: flex;
            align-items: center;
            gap: 6px;
            input[type='checkbox'] {
                width: 20px;
                height: 20px;
                border: 1px solid #1a3c22;
            }
        }
    }
    .filter-button {
        font-size: 15px;
        button {
            width: 120px;
            height: 35px;
            border-radius: 5px;
        }
        .btn-reset {
            margin-right: 10px;
            color: #3c6039;
            border: 1px solid #3c6039;
            background: #fff;
        }
        .btn-confirm {
            background: #3c6039;
            color: #fff;
        }
    }
`;

export const CategoryListWrap = styled.div`
    width: 1180px;
    .category-sort {
        display: flex;
        justify-content: right;
        font-size: 15px;
        margin-bottom: 30px;
        li {
            margin-left: 40px;
            cursor: pointer;
            position: relative;
            color: #666;
            &.active {
                color: #477c42;
            }
            &::after {
                content: '';
                width: 1px;
                height: 15px;
                background-color: #666;
                position: absolute;
                top: 50%;
                transform: translateY(-55%);
                right: -20px;
            }
            &:last-child::after {
                content: none;
            }
        }
    }
    .category-item-wrap {
        width: 1180px;
    }
`;
export const CategoryItemWrap = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    li {
        width: 250px;
        padding-bottom: 10px;
        border-bottom: 1px solid #333;
        margin-bottom: 5px;
        .img-wrap {
            position: relative;
            overflow: hidden;
            img {
                width: 250px;
                margin-bottom: 15px;
                display: block;
            }
            .overlay {
                position: absolute;
                background-color: rgba(0, 0, 0, 0.4);
                left: 0;
                top: 0;
                width: 250px;
                height: 300px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
                opacity: 0;
                transition: 0.3s ease;
                &:hover {
                    opacity: 1;
                }
                .icon-btn {
                    width: 45px;
                    height: 45px;
                    border-radius: 10px;
                    border: 1px solid #fff;
                    background: transparent;
                    color: #fff;
                    font-size: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
        h3 {
            font-size: 16px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .price-box {
            text-align: right;
            .discount {
                font-size: 15px;
                color: #999;
                text-decoration: line-through;
                min-height: 24px;
            }
            .price {
                font-size: 17px;
                span {
                    color: #ff7259;
                    font-size: 15px;
                    margin-right: 8px;
                }
            }
        }
    }
`;
