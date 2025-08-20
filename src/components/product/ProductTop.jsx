import React from 'react';
import { ProductTopStyle } from './style';

const ProductTop = ({ subCategories, selectedSub, setSelectedSub, fontSize }) => {
    return (
        <ProductTopStyle fontSize={fontSize}>
            <li
                className={selectedSub === '전체보기' ? 'on' : ''}
                onClick={() => setSelectedSub('전체보기')}
            >
                전체보기
            </li>
            {subCategories.map((sub) => (
                <li
                    key={sub}
                    className={selectedSub === sub ? 'on' : ''}
                    onClick={() => {
                        setSelectedSub(sub);
                    }}
                >
                    {sub}
                </li>
            ))}
        </ProductTopStyle>
    );
};

export default ProductTop;
