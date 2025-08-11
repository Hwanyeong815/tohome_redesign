import DeliveryList from '../../components/directDelivery/DeliveryList';
import { DirectDeliveryWrap } from './style';

const DirectDelivery = () => {
    return (
        <DirectDeliveryWrap>
            <div className="inner">
                <h2>브랜드직송관</h2>
                <DeliveryList />
            </div>
        </DirectDeliveryWrap>
    );
};

export default DirectDelivery;
