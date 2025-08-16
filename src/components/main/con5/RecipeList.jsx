import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCart2, BsSuitHeart } from 'react-icons/bs';
import Checkbox from '../../../ui/CheckBox';

const RecipeList = ({ product }) => {
    const { id, name, price, thumbnailImage } = product;
    const navigate = useNavigate();
    // const onGo = () => {
    //     navigate(`product/${id}`);
    // };
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        // <li onClick={onGo}>
        <li>
            <div className="img-box">
                <Checkbox
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    htmlFor="recipe"
                    right={'15px'}
                    top={'15px'}
                />
                <img src={thumbnailImage} alt="" />
                <div className="overlay">
                    <button className="icon-btn">
                        <BsSuitHeart />
                    </button>
                    <button className="icon-btn">
                        <BsCart2 />
                    </button>
                </div>
            </div>
            <h2>{name}</h2>
            <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
        </li>
    );
};

export default RecipeList;
