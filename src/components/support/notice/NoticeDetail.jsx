import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const CustomerDetail = () => {
    const { noticeID } = useParams();
    const { notices } = useSelector((state) => state.support);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const newItem = notices.find((notice) => notice.noticeId === Number(noticeID));
    // const newItem = notices.find((notice) => String(notice.noticeId) === noticeID);

    if (!newItem) {
        return (
            <div className="inner">
                <p>해당 공지사항을 찾을 수 없습니다.</p>
                <button onClick={() => navigate(-1)}>뒤로 가기</button>
            </div>
        );
    }
    const { noticeId, name, title, content, date } = newItem;

    return (
        <div>
            <div className="inner">
                <h3>{title}</h3>
                <p>작성자: {name}</p>
                <p>날짜: {date}</p>
                <div>{content}</div>
            </div>
        </div>
    );
};

export default CustomerDetail;
