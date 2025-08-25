import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CustomerDetailStyle } from './style';
import { LuPaperclip } from 'react-icons/lu';
import { CiSquarePlus } from 'react-icons/ci';
import { supportActions } from '../../../store/modules/supportSlice';

const getItemId = (c) => String(c?.id ?? c?.customerId ?? '');

const CustomerDetail = () => {
    const { customerID } = useParams();
    const { customers } = useSelector((state) => state.support);
    const { authed } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // ✅ id/customerId 기준으로 안전 비교
    const newItem = customers.find((c) => getItemId(c) === String(customerID));

    if (!newItem) {
        return <p>해당 게시글을 찾을 수 없습니다.</p>;
    }

    const id = getItemId(newItem);
    const { title = '', context = '', date = '' } = newItem;
    const username = newItem.username ?? newItem.name ?? '';

    const onEdit = () => {
        if (!authed) {
            alert('로그인 후 이용');
            return navigate('/login');
        }
        dispatch(supportActions.setCurrentCustomer(newItem));
        // ✅ /customer/customeredit/:customerID 로 이동
        navigate(`/customer/customeredit/${id}`, { state: { item: newItem } });
    };

    const onDel = () => {
        if (!authed) {
            alert('로그인 후 이용');
            return navigate('/login');
        }
        // 슬라이스가 number 비교면 Number(id)로
        dispatch(supportActions.removeCustomer(id));
        navigate('/customer');
    };

    return (
        <div className="inner">
            <CustomerDetailStyle>
                <div className="inner">
                    <article className="detail-wrap">
                        <div className="detail-head">
                            <h2>
                                문의 게시판 <span>게시글 수정</span>
                            </h2>
                        </div>

                        <div className="detail-body">
                            <section className="line line1">
                                <div className="col1">분류</div>
                                <div className="col2">배송문의</div>
                                <div className="col3"></div>
                            </section>

                            <section className="line line2">
                                <div className="col1">제목</div>
                                <div className="col2">
                                    {title} {username}
                                </div>
                                <div className="col3"></div>
                            </section>

                            <section className="line line3">
                                <div className="col1"></div>
                                <div className="col2">{context}</div>
                                <div className="col3"></div>
                            </section>
                        </div>

                        <div className="detail-bottom">
                            <div className="upload">
                                <p>첨부파일 업로드</p>
                                <p>
                                    <LuPaperclip />
                                    <LuPaperclip />
                                    <CiSquarePlus />
                                </p>
                            </div>

                            <div className="checkbox">답변 알림받기</div>

                            <div className="btn-wrap">
                                <button onClick={onEdit}>수정</button>
                                <button onClick={onDel}>삭제</button>
                                {/* ✅ 목록은 /customer */}
                                <button type="button" onClick={() => navigate('/customer')}>
                                    목록
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </CustomerDetailStyle>
        </div>
    );
};

export default CustomerDetail;
