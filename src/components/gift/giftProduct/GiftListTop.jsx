import { useSelector } from 'react-redux';
import { GiftListTopWrap } from './style';

const GiftListTop = ({ onSelectSub, selectedSub }) => {
    // const gifts = useSelector((state) => state.cart.gifts);

    const { AllDataList } = useSelector((state) => state.cart);
    const subCategories = AllDataList
        ? [
              ...new Set(
                  AllDataList.filter((f) => f.giftId) // ✅ giftId 있는 것만
                      .map((f) => f.category?.sub)
                      .filter(Boolean)
              ),
          ]
        : [];

    return (
        <GiftListTopWrap>
            <li className="show-all" onClick={() => onSelectSub(null)}>
                전체보기
            </li>
            {subCategories.map((sub, idx) => (
                <li
                    key={idx}
                    className={selectedSub === sub ? 'active' : ''}
                    onClick={() => onSelectSub(sub)}
                >
                    {sub}
                </li>
            ))}
        </GiftListTopWrap>
    );
};

export default GiftListTop;
