import { Link } from 'react-router-dom';

const NoticeItem = ({ notice, index }) => {
    const { noticeId, title, date } = notice;

    return (
        <tr>
            <td>{noticeId}</td>
            <td>
                <Link to={`/notice/${noticeId}`}>{title}</Link>
            </td>
            <td>{date}</td>
        </tr>
    );
};

export default NoticeItem;
