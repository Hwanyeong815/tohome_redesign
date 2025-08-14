import styled from 'styled-components';

export const HeaderStyle = styled.header`
    &.header {
        height: 230px;

        .inner {
            position: relative;

            .headBody {
                height: 50px;

                position: absolute;
                left: 50%;
                top: 80px;
                transform: translateX(-50%);
                transition: 0.3s;
                width: 300px;
                overflow: hidden;
                position: relative;
                &:hover {
                    h1 {
                        img {
                            top: -100%;
                            &.hoverImg {
                                top: 50%;
                            }
                        }
                    }
                    &::before {
                        top: 0%;
                    }
                }
                h1 {
                    cursor: pointer;
                    img {
                        position: absolute;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        top: 50%;
                        transition: 0.3s;
                        &.hoverImg {
                            top: 200%;
                            width: 60%;
                        }
                    }
                }
            }
        }
    }
`;

export const NavStyle = styled.nav.withConfig({
    shouldForwardProp: (prop) => prop !== 'isOpen', // isOpen은 DOM으로 전달하지 않음
})`
    bottom: 0;
    margin-top: 95px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    display: flex;

    .gnb {
        color: #333;
        display: flex;
        justify-content: center;
        gap: 0px;

        li {
            user-select: none;

            a {
                box-sizing: border-box;
                padding: 0 30px;
            }

            padding: 30px 5px;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                inset: 0;
                background-image: url('images/common/header_gradiant.png');
                background-repeat: no-repeat;
                background-position: center;
                transition: 0.3s ease;
                opacity: 0;
                pointer-events: none;
                z-index: -1;
                transform: scale(1.1);
            }

            &:hover {
                cursor: pointer;

                &::before {
                    opacity: 1;
                }
            }
        }
    }

    .all-menu {
        position: absolute;
        right: 0px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 30px 30px;

        cursor: pointer;

        span {
            background-color: #333;
            width: 30px;
            height: 3px;
            transition: 0.3s;
            transform-origin: center;
        }

        ${({ isOpen }) => `
      ${isOpen ? '' : '&:hover '}
      span {
        &:nth-child(1) {
          transform: translateY(430%) rotate(-45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: translateY(-430%) rotate(45deg);
        }
      }
    `}
    }
`;

export const TopMenu = styled.ul`
    &.top-menu {
        padding: 20px;
        position: absolute;
        right: 30px;
        top: 0px;
        display: flex;
        gap: 30px;

        li {
            /* background-color: aqua; */
            position: relative;
            a {
                color: #7e7e7e !important;
            }

            &:not(:last-child)::before {
                content: '';
                background-color: #7e7e7e;
                position: absolute;
                height: 80%;
                width: 1px;
                right: -15px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
`;

export const SearchWrap = styled.ul`
    transform: translateY(50%);
    position: absolute;
    right: 15px;
    top: 80px;
    display: flex;
    gap: 15px;
    .search {
        width: 160px;
        height: 35px;
        position: relative;
        background-color: #f3f3f3;
        border-radius: 35px;
        transition: 0.3s;
        &:hover {
            width: 300px;
        }
        &-item,
        img {
            font-size: 25px;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .cart {
        font-size: 25px;
        position: relative;
        span {
            position: absolute;
            right: -10px;
            top: -10px;
            width: 24px;
            height: 24px;
            background-color: #f3829e;
            border-radius: 50px;
            line-height: 24px;
            text-align: center;
            color: white;
            font-size: 17px;
        }
    }
`;
