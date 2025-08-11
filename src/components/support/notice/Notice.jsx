import pagination from '../../pagination';
import NoticeDetail from './NoticeDetail';
import NoticeList from './NoticeList';
import { NoticeStyle } from './style';

const Notice = () => {
    return (
        <NoticeStyle>
            <h2>공지사항</h2>
            <div className="select">
                <p>공지사항</p>
                <p>당첨자 발표</p>
            </div>
            <NoticeList />

            {/* <NoticeDetail /> */}
        </NoticeStyle>
    );
};

export default Notice;
