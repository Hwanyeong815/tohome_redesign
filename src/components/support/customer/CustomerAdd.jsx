import { useNavigate } from 'react-router-dom';
import { CustomerDetailStyle } from './style';
import { CiNoWaitingSign, CiSquarePlus } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { supportActions } from '../../../store/modules/supportSlice';
import { useState } from 'react';
import { LuPaperclip } from 'react-icons/lu';

const CustomerAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        title: '',
        content: '',
        data: '',
    });
    const { name, title, content, date } = data;

    const now = new Date();

    const changeInput = (e) => {
        const { value, name } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        data.date = `${now.getFullYear()} - ${
            now.getMonth() + 1
        } - ${now.getDate()}`;
        dispatch(supportActions.addCustomer(data));
        navigate('/customer');
    };
    return (
        <div className="inner">
            <CustomerDetailStyle>
                <div className="inner">
                    <article className="detail-wrap">
                        <div className="detail-head">
                            <h2>
                                문의 게시판 <span>문의글 작성</span>
                            </h2>
                        </div>
                        <form className="customer-add" onSubmit={onSubmit}>
                            <p>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="제목"
                                    value={title}
                                    onChange={changeInput}
                                />
                            </p>
                            <p>
                                <input
                                    type="text"
                                    value={name}
                                    placeholder="작성자"
                                    name="name"
                                    onChange={changeInput}
                                />
                            </p>
                            <p>
                                <textarea
                                    name="content"
                                    cols="100"
                                    rows="10"
                                    placeholder="문의하기"
                                    value={content}
                                    onChange={changeInput}
                                ></textarea>
                            </p>

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
                                    <button type="submit">저장하기</button>
                                    <button>취소하기</button>
                                    <button onClick={() => navigate(-1)}>
                                        목록
                                    </button>
                                </div>
                            </div>
                        </form>
                    </article>
                </div>
            </CustomerDetailStyle>
        </div>
    );
};

export default CustomerAdd;
