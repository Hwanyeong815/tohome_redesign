import GiftBestList from './GiftBestList';
import { GiftBestWrap } from './style';

const GiftBest = () => {
    return (
        <GiftBestWrap>
            <section>
                <h2>HOT BEST 10</h2>
                <GiftBestList />
            </section>
        </GiftBestWrap>
    );
};

export default GiftBest;
