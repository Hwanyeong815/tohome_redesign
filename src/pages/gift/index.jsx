import TopSection from '../../components/topSection/TopSection';
import GiftList from '../../components/gift/GiftList';
import GiftPoint from '../../components/gift/GiftPoint';
import GiftTutorial from '../../components/gift/GiftTutorial';
// import GiftBest from '../../components/gift/giftBest/GiftBest';
// import GiftPremium from '../../components/gift/giftPremium/GiftPremium';
import GiftPopular from '../../components/gift/GiftPopular';

const Gift = () => {
    return (
        <>
            <div className="inner">
                <TopSection
                    title="Gift to Home"
                    subtitle="거리는 멀어도 마음은 가까이,
                직접 전달하기 어려운 선물은 현대식품관 투홈 선물하기를 이용해보세요."
                />
                <GiftPoint />
                <GiftTutorial />
            </div>
            {/* <GiftBest /> */}
            <div className="inner">
                {/* <GiftPremium />
                <GiftPopular />
                <GiftList /> */}
            </div>
        </>
    );
};

export default Gift;
