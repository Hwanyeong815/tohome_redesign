import React from 'react';
import { useNavigate } from 'react-router-dom';

const BestMenuLi = ({ product }) => {
    const { id, name, price, thumbnailImage } = product;
    const navigate = useNavigate();
    const onGo = () => {
        navigate(`product/${id}`);
    };
    return (
        <li onClick={onGo} className="main-best-li">
            <div className="img-box">
                <img src={thumbnailImage} alt="" />
            </div>
            <h2>{name}</h2>

            <p>상품보기</p>
        </li>
    );
};

export default BestMenuLi;
