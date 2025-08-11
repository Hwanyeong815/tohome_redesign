import { CategoryTopWrap, CategorySub } from './style';
import { Link } from 'react-router-dom';

const CategoryTop = () => {
    return (
        <>
            <CategoryTopWrap>
                <h2>
                    <img src="/images/category/menu_icon_01.png" alt="" />
                    과일·채소
                </h2>
            </CategoryTopWrap>
            <CategorySub>
                <li>
                    <Link to="/">전체보기</Link>
                </li>
                <li>
                    <Link to="/">계절 과일</Link>
                </li>
                <li>
                    <Link to="/">일상 채소</Link>
                </li>
                <li>
                    <Link to="/">버섯·나물·두부</Link>
                </li>
                <li>
                    <Link to="/">샐러드·쌈채소</Link>
                </li>
                <li>
                    <Link to="/">냉동·간편·건과일</Link>
                </li>
                <li>
                    <Link to="/">H·SWEET·약속농장</Link>
                </li>
                <li>
                    <Link to="/">산들내음</Link>
                </li>
            </CategorySub>
        </>
    );
};

export default CategoryTop;
