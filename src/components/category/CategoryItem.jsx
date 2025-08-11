import { BsCart2, BsSuitHeart } from 'react-icons/bs';

const CategoryItem = () => {
    return (
        <>
            <div className="img-wrap">
                <img src="/images/menu01/01.jpg" alt="" />
                <div className="overlay">
                    <button className="icon-btn">
                        <BsSuitHeart />
                    </button>
                    <button className="icon-btn">
                        <BsCart2 />
                    </button>
                </div>
            </div>
            <h3>
                [새벽시장]
                <br />
                부사 사과 4입 1.1kg
            </h3>
            <div className="price-box">
                <p className="price">41,220원</p>
                <p className="discount">
                    <span>10%</span>45,800원
                </p>
            </div>
        </>
    );
};

export default CategoryItem;
