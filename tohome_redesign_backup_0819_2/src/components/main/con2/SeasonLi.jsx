const SeasonLi = ({ product }) => {
    const { id, name, price, thumbnailImage, discountRate, discountedPrice } = product;

    const isDiscountedValid = typeof discountedPrice === 'number' && discountedPrice < price;
    const displayPrice = isDiscountedValid ? discountedPrice : price;

    // 가격 포맷 함수
    const formatPrice = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        <li>
            <div className="img-box">
                <img src={thumbnailImage} alt={name} />
            </div>
            <h2>{name}</h2>

            <div className="price-wrap">
                {isDiscountedValid && (
                    <p
                        className="original-price"
                        style={{
                            fontSize: '0.8rem',
                        }}
                    >
                        {formatPrice(price)}원
                    </p>
                )}

                <p className="discounted-price">
                    {discountRate && <span className="dis-rate">{discountRate}%</span>}
                    {formatPrice(displayPrice)}원
                </p>
            </div>
        </li>
    );
};

export default SeasonLi;
