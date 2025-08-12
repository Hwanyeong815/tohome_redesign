import { CategoryFilterWrap } from './style';

const CategoryFilter = () => {
    return (
        <CategoryFilterWrap>
            <h3>필터</h3>
            <div className="filter-section">
                <h4>가격</h4>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" defaultChecked /> ~5천원
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> 5천원 ~ 1만원
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> 1 ~ 2만원
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> 2 ~ 3만원
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> 3 ~ 4만원
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> 5만원 이상
                        </label>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="filter-section">
                <h4>배송구분</h4>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" defaultChecked /> 전체
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" />
                            새벽투홈
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> 택배배송
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> 정기배송
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> 예약배송
                        </label>
                    </li>
                </ul>
            </div>
            <div className="filter-button">
                <button type="button" className="btn-reset">
                    초기화
                </button>
                <button type="button" className="btn-confirm">
                    확인
                </button>
            </div>
        </CategoryFilterWrap>
    );
};

export default CategoryFilter;
