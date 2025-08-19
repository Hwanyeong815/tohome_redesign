import { Box, ItemBox } from './style';
import SubBox from './SubBox';
const Cartitem = ({ cart, setIsCartTab }) => {
    // const { id, manufacturer, name, packagingType, price, discountedPrice } =
    //     cart;
    return (
        <Box>
            <div className="left">
                <SubBox key={cart} cart={cart} setIsCartTab={setIsCartTab} />
                {/* <SubBox />
                <SubBox /> */}
            </div>
        </Box>
    );
};

export default Cartitem;
