import MagazineList from '../../components/magazine/MagazineList';
import { MagazineWrap } from './style';

const Magazine = () => {
    return (
        <MagazineWrap>
            <div className="inner">
                <h2>매거진</h2>
                <MagazineList />
            </div>
        </MagazineWrap>
    );
};

export default Magazine;
