import React from 'react';

const NewProductLi = ({ product }) => {
    const { id, name, price, thumbnailImage } = product;
    return (
        <li>
            <img src={thumbnailImage} alt="" />
            <h2>{name}</h2>
            {/* {info && <p>{info}</p>}*/}
        </li>
    );
};

export default NewProductLi;
