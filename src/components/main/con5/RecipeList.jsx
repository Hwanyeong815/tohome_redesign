import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeList = ({ product }) => {
    const { id, name, price, thumbnailImage } = product;
    const navigate = useNavigate();
    const onGo = () => {
        navigate(`product/${id}`);
    };
    return (
        <li onClick={onGo}>
            <div className="img-wrap">
                <img src={thumbnailImage} alt="" />
            </div>
            <h2>{name}</h2>
            <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
        </li>
    );
};

export default RecipeList;
