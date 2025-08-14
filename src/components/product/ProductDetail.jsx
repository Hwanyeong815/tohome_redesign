import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductDetailStyle } from './style';
import DetailSide from './productDetail/DetailSide';
import DetailTab from './productDetail/DetailTab';
import DetailArt from './productDetail/DetailArt';

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
        <ProductDetailStyle>
            <DetailSide products={products} />
            <section>
                <DetailTab />
                <DetailArt />
            </section>
        </ProductDetailStyle>
    );
};

export default ProductDetail;
