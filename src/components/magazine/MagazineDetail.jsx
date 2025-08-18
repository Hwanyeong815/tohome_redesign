import MagazineDetailItem1 from './MagazineDetailItem1';
import MagazineDetailItem2 from './MagazineDetailItem2';
import MagazineDetailItem3 from './MagazineDetailItem3';
import MagazineDetailItem4 from './MagazineDetailItem4';
import { MagazineDetailStyle } from './style';

const MagazineDetail = () => {
    return (
        <MagazineDetailStyle>
            <MagazineDetailItem1 />
            <MagazineDetailItem2 />
            <MagazineDetailItem3 />
            <MagazineDetailItem4 />
        </MagazineDetailStyle>
    );
};

export default MagazineDetail;
