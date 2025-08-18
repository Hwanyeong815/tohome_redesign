import { cartActions } from '../../../store/modules/cartSlice';
import GiftListItem from './GiftListItem';
import { GiftProducts, GiftListWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';

const GiftList = ({ selectedSub }) => {
    const dispatch = useDispatch();
    const sortType = useSelector((state) => state.cart.sortType);
    const handleSort = (type) => {
        dispatch(cartActions.setSortType(type));
    };
    const gifts = useSelector((state) => state.cart.gifts);
    const filterGifts = selectedSub
        ? gifts.filter((f) => f.category.sub === selectedSub)
        : gifts;
    const sortedGifts = [...filterGifts].sort((a, b) => {
        if (sortType === '판매량순') {
            const aRank =
                a.tags.find((t) => t.name === '베스트')?.rank ?? Infinity;
            const bRank =
                b.tags.find((t) => t.name === '베스트')?.rank ?? Infinity;
            return aRank - bRank;
        }
        if (sortType === '신상품순') {
            const aRank =
                a.tags.find((t) => t.name === '신상품')?.rank ?? Infinity;
            const bRank =
                b.tags.find((t) => t.name === '신상품')?.rank ?? Infinity;
            return aRank - bRank;
        }
        if (sortType === '높은가격순') {
            return b.price - a.price;
        }
        if (sortType === '낮은가격순') {
            return a.price - b.price;
        }
        return 0;
    });
    return (
        <GiftProducts>
            <div>
                <ul className="category-sort">
                    {['판매량순', '신상품순', '높은가격순', '낮은가격순'].map(
                        (type) => (
                            <li
                                key={type}
                                className={sortType === type ? 'active' : ''}
                                onClick={() => handleSort(type)}
                            >
                                {type}
                            </li>
                        )
                    )}
                </ul>
            </div>
            <GiftListWrap>
                {sortedGifts.map((gift) => (
                    <GiftListItem key={gift.giftId} gift={gift} />
                ))}
            </GiftListWrap>
        </GiftProducts>
    );
};

export default GiftList;
