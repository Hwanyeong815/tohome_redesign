import NewProductsList from '../../components/newProducts/NewProductsList';
import { NewProductsWrap } from './style';

const NewProducts = () => {
    return (
        <NewProductsWrap>
            <div className="inner">
                <h2>신상품</h2>
                <NewProductsList />
            </div>
        </NewProductsWrap>
    );
};

export default NewProducts;
