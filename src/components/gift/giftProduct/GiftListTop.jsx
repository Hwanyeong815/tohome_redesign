import { useSelector } from 'react-redux';
import { GiftListTopWrap } from './style';

const GiftListTop = ({ onSelectSub }) => {
    const gifts = useSelector((state) => state.cart.gifts);
    const subCategories = gifts ? [...new Set(gifts.map((f) => f.category.sub))] : [];
    return (
        <GiftListTopWrap>
            <li className="show-all" onClick={() => onSelectSub(null)}>
                전체보기
            </li>
            {subCategories.map((sub, idx) => (
                <li key={idx} onClick={() => onSelectSub(sub)}>
                    {sub}
                </li>
            ))}
        </GiftListTopWrap>
    );
};

export default GiftListTop;
