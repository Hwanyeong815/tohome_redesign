import CustomerAdd from './CustomerAdd';
import CustomerDetail from './CustomerDetail';
import CustomerEdit from './CustomerEdit';
import CustomerList from './CustomerList';
import { CustomerStyle } from './style';

const Customer = () => {
    return (
        <CustomerStyle>
            <h2>
                문의 게시판 <span>문의내역</span>
            </h2>
            {/* <CustomerAdd /> */}
            {/* <CustomerDetail /> */}
            {/* <CustomerEdit /> */}
            <CustomerList />
        </CustomerStyle>
    );
};

export default Customer;
