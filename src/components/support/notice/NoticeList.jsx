import { useDispatch, useSelector } from 'react-redux';
import NoticeItem from './NoticeItem';
import { NoticeListStyle } from './style';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Pagination from '../../pagination';
import { paginationActions } from '../../../store/modules/paginationSlice';

const NoticeList = ({ noticeTab }) => {
    const { notices } = useSelector((state) => state.support);
    console.log(notices);
    const { pageData, totalCount, perPage, currentPage, totalPages } = useSelector(
        (state) => state.pagination.notice
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const startIdx = (currentPage - 1) * perPage;
    const endIdx = startIdx + perPage;
    const currentNotices = pageData.slice(startIdx, endIdx);

    useEffect(() => {
        const filteredNotices =
            noticeTab === 'all'
                ? notices
                : notices.filter((notice) => notice.tags?.name === noticeTab);

        dispatch(paginationActions.setData({ key: 'notice', data: filteredNotices }));
    }, [notices, noticeTab]);

    const handlePageChange = (page) => {
        dispatch(paginationActions.goToPage({ key: 'notice', page }));
    };

    const onMake = () => {
        // auth가 true일때 글 작성
    };

    return (
        <NoticeListStyle>
            <table className="noticeTable">
                <caption>공지사항게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="tit" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>제목</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody>
                    {[...currentNotices].reverse().map((notice, index) => {
                        return (
                            <NoticeItem
                                key={`${notice.date}-${index}`}
                                notice={notice}
                                index={index}
                            />
                        );
                    })}
                </tbody>
            </table>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </NoticeListStyle>
    );
};

export default NoticeList;
