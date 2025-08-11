import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductDetailDiv } from './style';

const ProductDetail = () => {
    const { productID } = useParams();
    const { products } = useSelector((state) => state.cart);
    const obj = products.find((product) => product.id === Number(productID));
    const {
        id,
        name,
        des,
        price,
        discountedPrice,
        isDiscounted,
        discountRate,
        pricePerUnit,
        thumbnailImage,
        details: {
            origin,
            packagingType,
            additionalDiscount,
            deliveryType,
            barcode,
            size,
            unitWeight,
            manufacturer,
            importer,
            originLaw,
            expirationPolicy,
            itemName,
            gmoInfo,
            importNotice,
            productContents,
            storageMethod,
            customerService,
            safetyNotice,
        },
    } = obj;

    return (
        <ProductDetailDiv>
            상세페이지
            <img src={thumbnailImage} alt={name} />
            <h2>
                {name}
                {des}
            </h2>
            <h3>{pricePerUnit}</h3>
            <h3>{price}</h3>
            {/* 신상품, 베스트 메뉴 태그일 경우 버튼 생성 */}
            <p>
                {id}
                {origin}
            </p>
            <div>할인율 : {discountRate}%</div>
            {packagingType}
        </ProductDetailDiv>
    );
};

export default ProductDetail;
