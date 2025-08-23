import BestList from '../../components/best/BestList';
import { BestWrap } from './style';

const Best = () => {
    return (
        <BestWrap>
            <div className="inner">
                <h2>베스트</h2>
                <BestList />
            </div>
        </BestWrap>
    );
};

export default Best;
