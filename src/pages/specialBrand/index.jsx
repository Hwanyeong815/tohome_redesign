import BrandList from '../../components/specialBrand/BrandList';
import { SpecialBrandWrap } from './style';

const SpecialBrand = () => {
    return (
        <SpecialBrandWrap>
            <div className="inner">
                <h2>특화브랜드관</h2>
                <BrandList />
            </div>
        </SpecialBrandWrap>
    );
};

export default SpecialBrand;
