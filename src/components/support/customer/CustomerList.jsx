import { useDispatch, useSelector } from 'react-redux';
import CustomerItem from './CustomerItem';
import { CustomerListStyle } from './style';
import Pagination from '../../pagination';
import { paginationActions } from '../../../store/modules/paginationSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CustomerList = () => {
    const { customers } = useSelector((state) => state.support);
    const { pageData, totalCount, perPage, currentPage, totalPages } = useSelector(
        (state) => state.pagination
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const startIdx = (currentPage - 1) * perPage;
    const endIdx = startIdx + perPage;
    const currentCustomers = pageData.slice(startIdx, endIdx);

    useEffect(() => {
        dispatch(paginationActions.setData(customers));
    }, [customers]);

    const handlePageChange = (page) => {
        dispatch(paginationActions.goToPage(page));
    };

    const onMake = () => {
        // auth가 true일때 글 작성
    };

    return (
        <CustomerListStyle>
            <table className="customerTable">
                <caption>공지사항게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="tit" />
                    <col className="writer" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody>
                    {[...currentCustomers].reverse().map((customer, index) => (
                        <CustomerItem key={`${customer.date}-${index}`} customer={customer} />
                    ))}
                </tbody>
            </table>{' '}
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </CustomerListStyle>
    );
};

export default CustomerList;
