import { Link } from 'react-router-dom';

const CustomerItem = ({ customer, index, totalCount, currentPage, perPage }) => {
    const { customerId, title, username, date } = customer;

    const nTotal = Number(totalCount) || 0;
    const nPage = Number(currentPage) || 1;
    const nPer = Number(perPage) || 10;

    // 페이지 기준 역순 번호 (최신이 큰 번호)
    const offset = (nPage - 1) * nPer;
    const number = nTotal - (offset + index);

    return (
        <tr>
            <td>{String(number)}</td>
            <td>
                <Link to={`/customer/${customerId}`}>{title}</Link>
            </td>
            <td>{username}</td>
            <td>{date}</td>
        </tr>
    );
};

export default CustomerItem;
