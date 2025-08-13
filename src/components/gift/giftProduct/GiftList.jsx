import GiftListItem from './GiftListItem';
import { GiftListWrap } from './style';
import { useSelector } from 'react-redux';

const GiftList = () => {
    const { gifts } = useSelector((state) => state.cart);
    return (
        <>
            <div className="gift-tab">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <GiftListWrap>
                {gifts.map((gift) => (
                    <GiftListItem key={gift.giftId} gift={gift} />
                ))}
            </GiftListWrap>
        </>
    );
};

export default GiftList;
