import SaleList from '../../components/sale/SaleList';
import { SaleWrap } from './style';

const Sale = () => {
    return (
        <SaleWrap>
            <div className="inner">
                <h2>세일</h2>
                <SaleList />
            </div>
        </SaleWrap>
    );
};

export default Sale;
