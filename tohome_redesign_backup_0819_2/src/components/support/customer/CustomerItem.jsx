import { Link } from 'react-router-dom';

const CustomerItem = ({ customer }) => {
    const { customerId, title, username, date } = customer;

    return (
        <tr>
            <td>{customerId}</td>
            <td>
                <Link to={`/customer/${customerId}`}>{title}</Link>
            </td>
            <td>{username}</td>
            <td>{date}</td>
        </tr>
    );
};

export default CustomerItem;
