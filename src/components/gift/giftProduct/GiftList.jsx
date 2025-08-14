import GiftListItem from './GiftListItem';
import { GiftProducts, GiftListWrap } from './style';
import { useSelector } from 'react-redux';

const GiftList = ({ selectedSub }) => {
    const gifts = useSelector((state) => state.cart.gifts);
    const filterGifts = selectedSub ? gifts.filter((f) => f.category.sub === selectedSub) : gifts;
    return (
        <GiftProducts>
            <div>
                <ul className="category-sort">
                    <li>판매량순</li>
                    <li>신상품순</li>
                    <li>높은가격순</li>
                    <li>낮은가격순</li>
                </ul>
            </div>
            <GiftListWrap>
                {filterGifts.map((gift) => (
                    <GiftListItem key={gift.giftId} gift={gift} />
                ))}
            </GiftListWrap>
        </GiftProducts>
    );
};

export default GiftList;
