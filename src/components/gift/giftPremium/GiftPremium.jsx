import GiftPremiumList from './GiftPremiumList';
import { GiftPremiumWrap } from './style';

const GiftPremium = () => {
    return (
        <GiftPremiumWrap>
            <h2>품격을 담은 프리미엄 선물 모음</h2>
            <GiftPremiumList />
            <button>더보기</button>
        </GiftPremiumWrap>
    );
};

export default GiftPremium;
