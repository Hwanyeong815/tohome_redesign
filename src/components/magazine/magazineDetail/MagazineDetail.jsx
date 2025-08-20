import MagazineBottom from '../MagazineBottom';
import MagazineDetailItem1 from './MagazineDetailItem1';
import MagazineDetailItem2 from './MagazineDetailItem2';
import MagazineDetailItem3 from './MagazineDetailItem3';
import MagazineDetailItem4 from './MagazineDetailItem4';
import { MagazineDetailStyle } from './style';

const MagazineDetail = ({ onToggle }) => {
    return (
        <MagazineDetailStyle>
            <MagazineDetailItem1 onToggle={onToggle} />
            <MagazineDetailItem2 />
            <MagazineDetailItem3 />
            <MagazineDetailItem4 />
        </MagazineDetailStyle>
    );
};

export default MagazineDetail;
