import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { supportActions } from '../../../store/modules/supportSlice';

const getItemId = (item) => item?.id ?? item?.customerId;

const CustomerEdit = () => {
    const { customerID } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { current, customers } = useSelector((state) => state.support);
    const now = new Date();

    const rawItem = useMemo(() => {
        const byState = location.state?.item;
        if (byState) return byState;

        const byParam = customers?.find(
            (c) => String(getItemId(c)) === String(customerID)
        );
        if (byParam) return byParam;

        return current ?? null;
    }, [location.state, customers, current, customerID]);

    const [user, setUser] = useState({
        id: null,
        name: '',
        title: '',
        context: '',
        date: '',
    });

    // rawItem 들어오면 user 세팅
    useEffect(() => {
        if (rawItem) {
            setUser({
                id: getItemId(rawItem),
                name: rawItem.name ?? rawItem.username ?? '',
                title: rawItem.title ?? '',
                context: rawItem.context ?? rawItem.context ?? '',
                date: rawItem.date ?? '',
            });
        }
    }, [rawItem]);

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!user.title.trim()) return;

        const updatedUser = {
            ...user,
            date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
        };

        dispatch(supportActions.updateCustomer(updatedUser));
        navigate(`/support/${user.id}`); // 수정 후 상세로 이동
    };

    if (!rawItem) {
        return <p>수정할 데이터를 찾을 수 없습니다.</p>;
    }

    return (
        <form className="customer-add" onSubmit={onSubmit}>
            <p>
                <input
                    name="title"
                    value={user.title}
                    onChange={changeInput}
                    placeholder="제목"
                />
            </p>
            <p>
                <input
                    name="name"
                    value={user.name}
                    onChange={changeInput}
                    placeholder="작성자"
                />
            </p>
            <p>
                <textarea
                    name="context"
                    rows="10"
                    value={user.context}
                    onChange={changeInput}
                />
            </p>
            <div className="btn-wrap">
                <button type="submit">저장하기</button>
                <button type="button" onClick={() => navigate(-1)}>
                    목록
                </button>
            </div>
        </form>
    );
};

export default CustomerEdit;
