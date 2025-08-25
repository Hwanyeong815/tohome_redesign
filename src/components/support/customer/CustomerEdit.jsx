// src/pages/support/CustomerEdit.jsx
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { supportActions } from '../../../store/modules/supportSlice';

const getItemId = (c) => Number(c?.id ?? c?.customerId);
const getUsername = (c) => c?.username ?? c?.name ?? '';

const CustomerEdit = () => {
    const { customerID } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { current, customers } = useSelector((state) => state.support);

    const rawItem = useMemo(() => {
        const byState = location.state?.item;
        if (byState) return byState;

        const byParam = customers?.find((c) => String(getItemId(c)) === String(customerID));
        if (byParam) return byParam;

        return current ?? null;
    }, [location.state, customers, current, customerID]);

    const [user, setUser] = useState({
        id: null,
        username: '',
        title: '',
        context: '',
        date: '',
    });
    const [error, setError] = useState('');

    useEffect(() => {
        if (rawItem) {
            setUser({
                id: getItemId(rawItem),
                username: getUsername(rawItem),
                title: rawItem.title ?? '',
                context: rawItem.context ?? '',
                date: rawItem.date ?? '',
            });
        }
    }, [rawItem]);

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
        if (error) setError('');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // ✅ 명확한 피드백
        if (!user.title.trim()) {
            setError('제목을 입력해 주세요.');
            return;
        }

        const now = new Date();
        const id = Number(user.id);

        const updatedUser = {
            ...rawItem, // 기존 값 보존
            ...user, // 변경 덮어쓰기
            id,
            customerId: id,
            username: user.username || getUsername(rawItem),
            date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
        };

        // 디버깅용 로그 (필요 시)
        // console.log('submit payload', updatedUser);

        dispatch(supportActions.updateCustomer(updatedUser));
        navigate(`/customer/${id}`);
        // 이동 후 스크롤 상단
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!rawItem) return <p>수정할 데이터를 찾을 수 없습니다.</p>;
    console.log('submit');
    return (
        <form className="customer-add" onSubmit={onSubmit} noValidate>
            <p>
                <input
                    name="title"
                    value={user.title}
                    onChange={changeInput}
                    placeholder="제목"
                    required
                />
            </p>
            <p>
                <input
                    name="username"
                    value={user.username}
                    onChange={changeInput}
                    placeholder="작성자"
                    required
                />
            </p>
            <p>
                <textarea
                    name="context"
                    rows="10"
                    value={user.context}
                    onChange={changeInput}
                    placeholder="내용"
                />
            </p>

            {/* 에러 메시지 */}
            {error && <p style={{ color: 'crimson', marginTop: 8 }}>{error}</p>}

            <div className="btn-wrap" style={{ position: 'relative', zIndex: 1 }}>
                <button type="submit">저장하기</button>
                <button type="button" onClick={() => navigate(-1)}>
                    목록
                </button>
            </div>
        </form>
    );
};

export default CustomerEdit;
