import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CustomerDetailStyle } from './style';
import { LuPaperclip } from 'react-icons/lu';
import { CiSquarePlus } from 'react-icons/ci';

const CustomerDetail = () => {
    const { customerID } = useParams();
    const { customers } = useSelector((state) => state.support);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const newItem = customers.find((customer) => customer.customerId === Number(customerID));
    const { customerId, username, title, context, date } = newItem;

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
                                <div className="col2">{title}</div>
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
                                <button>수정</button>
                                <button>삭제</button>
                                <button onClick={() => navigate(-1)}>목록</button>
                            </div>
                        </div>
                    </article>
                </div>
            </CustomerDetailStyle>
        </div>
    );
};

export default CustomerDetail;
