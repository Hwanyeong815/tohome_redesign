import { useDispatch, useSelector } from 'react-redux';
import { PaginationStyle } from './style';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pageArray = [...Array(totalPages)].map((_, i) => i + 1);

    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return;
        onPageChange(page);
    };

    return (
        <PaginationStyle>
            <div>
                <button onClick={() => goToPage(1)}>{`<<`}</button>
                <button onClick={() => goToPage(currentPage - 1)}>{`<`}</button>

                {pageArray.map((page) => (
                    <button
                        key={page}
                        className={currentPage === page ? 'on' : ''}
                        onClick={() => goToPage(page)}
                    >
                        {page}
                    </button>
                ))}

                <button onClick={() => goToPage(currentPage + 1)}>{`>`}</button>
                <button onClick={() => goToPage(totalPages)}>{`>>`}</button>
            </div>
        </PaginationStyle>
    );
};

// const pagination = () => {
//     const { totalPages, currentPage } = useSelector((state) => state.pagination);
//     const dispatch = useDispatch();

//     const pageArray = [...Array(totalPages)].map((_, i) => i + 1);
//     return (
//         <PaginationStyle>
//             <div>
//                 <button onClick={() => dispatch(paginationActions.goToFirstPage())}>{`<<`}</button>
//                 <button
//                     onClick={() => dispatch(paginationActions.prevPage(currentPage))}
//                 >{`<`}</button>
//                 {pageArray.map((item) => (
//                     <button
//                         key={item}
//                         className={currentPage === item ? 'on' : ''}
//                         onClick={() => dispatch(paginationActions.goToPage(item))}
//                     >
//                         {item}
//                     </button>
//                 ))}

//                 <button
//                     onClick={() => dispatch(paginationActions.nextPage(currentPage))}
//                 >{`>`}</button>
//                 <button onClick={() => dispatch(paginationActions.goToLastPage())}>{`>>`}</button>
//             </div>
//         </PaginationStyle>
//     );
// };

export default Pagination;
