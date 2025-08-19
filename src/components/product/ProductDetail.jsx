import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductDetailStyle } from './style';
import DetailSide from './productDetail/DetailSide';
import DetailTab from './productDetail/DetailTab';
import DetailArt from './productDetail/DetailArt';
import { useState } from 'react';

const ProductDetail = () => {
    const { productID } = useParams();
    const { products, menus, specials } = useSelector((state) => state.cart);
    const AllMenus = [...products, ...menus, ...specials];

    const obj = AllMenus.find((product) => {
        const candidateId =
            product.id ??
            product.fruitId ??
            product.brandId ??
            product.grainId ??
            product.seafoodId ??
            product.meatId ??
            product.riceId ??
            product.sideId ??
            product.seasoningId ??
            product.bakeryId ??
            product.snackId ??
            product.liquidId;

        return Number(candidateId) === Number(productID);
    });

    if (!obj)
        return <p style={{ textAlign: 'center', padding: '30px' }}>상품을 찾을 수 없습니다.</p>;

    const {
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

    const [activeTab, setActiveTab] = useState(0);

    return (
        <ProductDetailStyle>
            <DetailSide products={products} obj={obj} />
            <section>
                <DetailTab active={activeTab} onChange={setActiveTab} />

                <DetailArt activeIndex={activeTab} onSlideChange={setActiveTab} obj={obj} />
            </section>
        </ProductDetailStyle>
    );
};

export default ProductDetail;
