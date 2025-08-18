import MagazineBottom from '../../components/magazine/MagazineBottom';
import MagazineDetail from '../../components/magazine/MagazineDetail';
import MagazineList from '../../components/magazine/MagazineList';
import { MagazineWrap } from './style';

const Magazine = () => {
    return (
        <MagazineWrap>
            <div className="inner">
                {/* <MagazineList /> */}
                <MagazineDetail />
                <MagazineBottom />
            </div>
        </MagazineWrap>
    );
};

export default Magazine;
