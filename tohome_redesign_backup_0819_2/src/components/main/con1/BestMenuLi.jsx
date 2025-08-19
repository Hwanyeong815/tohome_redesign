import React from 'react';
import { useNavigate } from 'react-router-dom';

const BestMenuLi = ({ product }) => {
    const { id, name, price, thumbnailImage, des } = product;
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
            <h3>
                {des.split('\n').map((line, idx) => (
                    <span key={idx}>
                        {line}
                        <br />
                    </span>
                ))}
            </h3>

            <p>상품보기</p>
        </li>
    );
};

export default BestMenuLi;
