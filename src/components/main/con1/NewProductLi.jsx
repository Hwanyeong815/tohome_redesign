import React from 'react';

const NewProductLi = ({ product }) => {
    const { id, name, price, thumbnail } = product;
    return (
        <li>
            <img src={thumbnail} alt="" />
            <h2>{name}</h2>
            {/* {info && <p>{info}</p>}*/}
        </li>
    );
};

export default NewProductLi;
