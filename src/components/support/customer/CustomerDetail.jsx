import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const CustomerDetail = () => {
    const { customerID } = useParams();
    const { customers } = useSelector((state) => state.support);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const newItem = customers.find((customer) => customer.customerId === Number(customerID));
    const { customerId, name, title, content, date } = newItem;

    return (
        <div>
            <div className="inner">
                <h3>{customerId}</h3>
                <p>{name}</p>
                <p>{title}</p>
                <p>{content}</p>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default CustomerDetail;
