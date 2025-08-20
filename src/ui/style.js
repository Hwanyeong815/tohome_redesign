import styled from 'styled-components';

export const CheckboxStyle = styled.label`
    z-index: 20;
    .checkbox-wrap {
        position: relative;
    }

    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    input {
        display: none;
    }

    position: absolute;
    /* top: 15px; */
    /* right: 15px; */
    top: ${(props) => props.$top || 'auto'};
    right: ${(props) => props.$right || 'auto'};
    left: ${(props) => props.$left || 'auto'};
    bottom: ${(props) => props.$bottom || 'auto'};

    .custom-check {
        width: 30px;
        height: 30px;
        border: 2px solid #b1b1b1;
        border-radius: 5px;
        background-color: white;
        margin-right: 8px;
        position: relative;
    }
    input:checked + .custom-check {
        border-color: #ff7259;
    }
    /* 체크 표시 (✔) */
    input:checked + .custom-check::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url('/images/icon/icon_check.png');
        background-size: cover;
        background-repeat: no-repeat;
        width: 20px;
        height: 15px;
    }
    .check-label {
        font-size: 14px;
        color: #333;
    }
`;
