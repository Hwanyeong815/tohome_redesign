import GiftList from '../../components/gift/GiftList';
import GiftPoint from '../../components/gift/GiftPoint';
import GiftTutorial from '../../components/gift/GiftTutorial';
import GiftBest from '../../components/gift/GiftBest';
import GiftPremium from '../../components/gift/GiftPremium';
import GiftPopular from '../../components/gift/GiftPopular';

const Gift = () => {
    return (
        <div className="inner">
            <GiftPoint />
            <GiftTutorial />
            <GiftList />
            <GiftBest />
            <GiftPremium />
            <GiftPopular />
        </div>
    );
};

export default Gift;
